---
title: 'Next.js의 SSR, SSG, CSR: 차이점과 사용 사례'
date: '2024-5-17'
description: 'Next.js의 SSR, SSG, CSR의 차이점과 사용 사례와, 각 렌더링 방식의 특징과 장단점을 설명.'
tags:
  [
    'study',
    'til',
    'frontend',
    'javascript',
    '웹 성능 최적화',
    'seo',
    'nextjs',
    'ssr',
    'ssg',
    'csr',
    'react',
    '웹 개발'
  ]
thumbnail: 'nextjs-ssr-csr-ssg.jpeg'
category: 'nextjs'
readTime: 5
---

Next.js는 React 애플리케이션을 위한 강력한 프레임워크로, 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), 클라이언트 사이드 렌더링(CSR)을 지원합니다. 이 글에서는 이 세 가지 렌더링 방식의 차이점과 각 방식이 적합한 사용 사례를 살펴볼까요.

## 1. 서버 사이드 렌더링 (SSR)

서버 사이드 렌더링(SSR)은 서버에서 페이지를 미리 렌더링하고, 완전한 HTML을 클라이언트에 전달하는 방식입니다. Next.js에서는 `getServerSideProps` 함수를 사용하여 SSR을 구현할 수 있습니다.

---

### 특징 및 사용사례

- **초기 로드 속도**: 서버에서 렌더링된 HTML을 바로 전달하기 때문에 초기 로드 속도가 빠릅니다.
- **SEO 친화적**: 서버에서 완전한 HTML을 제공하므로 검색 엔진 크롤러가 쉽게 페이지를 인덱싱할 수 있습니다.
- **실시간 데이터**: 서버에서 매 요청마다 새로운 데이터를 가져올 수 있습니다.
- **동적 콘텐츠**: 사용자마다 다른 콘텐츠를 제공해야 하는 경우 (예: 사용자 대시보드, 개인화된 페이지).
- **SEO가 중요한 페이지**: 검색 엔진 최적화가 중요한 페이지 (예: 블로그, 마케팅 페이지).

```jsx
export async function getServerSideProps(context) {
  const res = await fetch(`https://api.example.com/data`)
  const data = await res.json()

  return { props: { data } }
}

const Page = ({ data }) => {
  return <div>{data.content}</div>
}

export default Page
```

## 2. 정적 사이트 생성 (SSG)

정적 사이트 생성(SSG)은 빌드 타임에 HTML 페이지를 생성하여, 요청 시 미리 생성된 페이지를 제공하는 방식입니다. Next.js에서는 `getStaticProps`와 `getStaticPaths` 함수를 사용하여 SSG를 구현할 수 있습니다.

---

### 특징 및 사용사례

- **초고속 로드 속도**: 모든 페이지가 미리 생성되므로 요청 시 서버의 처리가 필요 없습니다.
- **SEO 친화적**: SSR과 마찬가지로 검색 엔진 크롤러가 쉽게 인덱싱할 수 있습니다.
- **낮은 서버 부하**: 정적 파일을 제공하므로 서버 부하가 적습니다.
- **블로그 포스트**: 게시물 내용이 자주 변경되지 않는 경우.
- **마케팅 페이지**: 고정된 콘텐츠를 제공하는 페이지.

```jsx
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return { props: { data } }
}

const Page = ({ data }) => {
  return <div>{data.content}</div>
}

export default Page
```

## 3. 클라이언트 사이드 렌더링 (CSR)

클라이언트 사이드 렌더링(CSR)은 모든 렌더링이 클라이언트 측에서 이루어지는 방식입니다. Next.js에서는 기본적으로 CSR을 지원하며, `useEffect` 훅을 사용하여 데이터를 가져올 수 있습니다.

---

### 특징 및 사용사례

- **초기 로드 속도**: 초기 로드 속도가 느릴 수 있지만, 페이지 간 전환이 빠릅니다.
- **SEO 제한**: 클라이언트 측에서 렌더링되므로 검색 엔진 크롤러가 인덱싱하기 어렵습니다.
- **사용자 상호작용**: 자주 업데이트되는 데이터나 사용자 상호작용이 많은 애플리케이션에 적합합니다.
- **대시보드**: 실시간 데이터가 자주 업데이트되는 경우.
- **웹 애플리케이션**: 복잡한 사용자 상호작용이 필요한 애플리케이션.

```jsx
import { useEffect, useState } from 'react'

const Page = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  if (!data) return <div>Loading...</div>

  return <div>{data.content}</div>
}

export default Page
```

## 결론

Next.js는 SSR, SSG, CSR 세 가지 렌더링 방식을 지원하여 다양한 요구사항에 맞는 애플리케이션을 개발할 수 있게 합니다. 각 방식의 특징과 사용 사례를 이해하고 적절하게 선택하여 효율적인 웹 애플리케이션을 만들자!
