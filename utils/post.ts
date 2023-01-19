import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { remark } from 'remark'
import * as remarkHtml from 'remark-html'

import { Post, PostMeta } from 'interfaces/postType'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getAllPosts() {
  const files = fs.readdirSync(postsDirectory)

  const posts = files.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)

    console.log(fullPath)

    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    } as PostMeta
  })

  const sortedPostList = posts.sort(
    (a: PostMeta, b: PostMeta) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return sortedPostList
}

export const getAllPostPaths = () => {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        filename: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(filename: string) {
  const fullPath = path.join(postsDirectory, `${filename}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(remarkHtml as any)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    filename,
    contentHtml,
    ...(matterResult.data as Post)
  }
}
