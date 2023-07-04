import Image from 'next/image'
import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import {
  PComponent,
  H2Component,
  H1Component,
  PreComponent
} from './SyntaxHighlighterStyle'

const COMMON_STYLE = {
  heading: 'mt-10 mb-6',
  media: 'w-full max-w-xl',
  list: 'flex flex-col gap-1 mb-6 list-inside'
}

const SyntaxHighlighter = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <ReactSyntaxHighlighter
        language={match[1]}
        PreTag='pre'
        style={vscDarkPlus}
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </ReactSyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  hr: ({ ...props }) => (
    <hr className='border-t-1 my-4 border-gray-500' {...props} />
  ),
  h1: ({ children, ...props }) => (
    <H1Component {...props}>{children}</H1Component>
  ),
  h2: ({ children, ...props }) => (
    <H2Component {...props}>{children}</H2Component>
  ),
  h3: ({ children, ...props }) => (
    <h3 {...props} className={`${COMMON_STYLE.heading} text-xl sm:text-2xl`}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 {...props} className={`${COMMON_STYLE.heading} text-lg sm:text-xl`}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => <PComponent {...props}>{children}</PComponent>,
  strong: ({ children, ...props }) => (
    <strong {...props} className='font-medium'>
      {children}
    </strong>
  ),
  img: ({ src, alt, ...props }) => {
    return (
      <div className='mb-6 flex w-full flex-col items-center justify-center gap-2'>
        <Image
          {...props}
          className={`${COMMON_STYLE.media} h-full object-cover`}
          src={src}
          alt={alt}
          width={560}
          height={350}
        />
        {alt && <p className='text-light text-sm'>{alt}</p>}
      </div>
    )
  },
  blockquote: ({ children, ...props }) => (
    <blockquote
      {...props}
      className='mt-5 mb-6 border-l-2 border-l-zinc-900 py-2 px-6 dark:border-l-white'
    >
      {children}
    </blockquote>
  ),
  a: ({ children, ...props }) => (
    <a {...props} className='text-blue-900 hover:underline dark:text-blue-400'>
      {children}
    </a>
  ),
  pre: ({ children, ...props }) => (
    <PreComponent {...props}>{children}</PreComponent>
  ),
  ul: ({ children, depth, ...props }) => {
    return (
      <ul {...props} className={`ml-${depth} ${COMMON_STYLE.list} list-disc`}>
        {children}
      </ul>
    )
  },
  ol: ({ children, depth, ...props }) => (
    <ol {...props} className={`${COMMON_STYLE.list} list-decimal`}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li {...props} className='text-lg font-light'>
      {children}
    </li>
  )
}

export default SyntaxHighlighter
