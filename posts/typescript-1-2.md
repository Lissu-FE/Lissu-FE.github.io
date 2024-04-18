---
title: '타입스크립트 설정 이해하기'
date: '2023-7-5'
description: '타입스크립트를 사용하려면 프로젝트 루트에 tsconfig.json 파일이 필요합니다. 이 파일은 타입스크립트 컴파일러에게 프로젝트를 어떻게 컴파일할지 지시합니다.'
tags: ['study', 'til', 'typeScript', '타입스크립트']
thumbnail: 'tsconfig.jpeg'
category: 'typescript'
readTime: 7
---

## tsconfig.json 기본 구조

기본적인 `tsconfig.json` 파일은 다음과 같이 생겼습니다:

```json
{
  "compilerOptions": {
    // 컴파일러 옵션들
  },
  "include": [
    // 컴파일에 포함할 파일 또는 폴더
  ],
  "exclude": [
    // 컴파일에서 제외할 파일 또는 폴더
  ]
}
```

## 주요 컴파일러 옵션들

- `target`: 컴파일된 JavaScript가 실행될 ECMAScript 대상 버전을 설정합니다. 예를 들어, "ES5", "ES6", "ES2017" 등이 있습니다.
- `module`: 컴파일된 코드의 모듈 시스템을 설정합니다. 예를 들어, "commonjs", "amd", "es2015", "system", "umd", "es2020", "esnext" 등이 있습니다.
- `strict`: 모든 엄격한 타입 검사 옵션을 활성화합니다.
- `outDir`: 컴파일된 JavaScript 파일이 위치할 출력 디렉토리를 설정합니다.
- `rootDir`: 소스 파일이 위치한 루트 디렉토리를 설정합니다.
- `noImplicitAny`: 타입이 지정되지 않은 변수에 대해 오류를 발생시킵니다.
- `esModuleInterop`: CommonJS와 ES 모듈 간의 상호 운용성을 활성화합니다.

## 예시 tsconfig.json

아래는 예시 `tsconfig.json` 파일입니다:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "noImplicitAny": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

위 설정에 따르면, 타입스크립트 컴파일러는 `./src` 디렉토리 내의 `.ts` 파일들을 ES5 문법으로 컴파일하고, 컴파일된 파일을 `./dist` 디렉토리에 저장합니다. 또한, 엄격한 타입 검사를 활성화하고, 타입이 지정되지 않은 변수를 허용하지 않습니다. 마지막으로, `node_modules` 폴더는 컴파일에서 제외됩니다.
