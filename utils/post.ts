import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const postPath = path.join(process.cwd(), 'posts')

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postPath)

  return fileNames.map((fileName) => {
    return {
      params: {
        filename: fileName.replace(/\.md$/, '')
      }
    }
  })
}
