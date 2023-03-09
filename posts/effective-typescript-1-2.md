---
title: '[이펙티브 타입스크립트] 타입스크립트 설정 이해하기'
date: '2022-1-28'
description: '1장 - 타입스크립트 알아보기 / 아이템 2 <타입스크립트 설정 이해하기>'
tags: ['study', 'til', 'typeScript', '이펙티브 타입스크립트', '타입스크립트']
thumbnail: 'effective-typescript.png'
category: 'typescript'
readTime: 4
---

### 아이템2 - 타입스크립트 설정 이해하기

런타임을 할 때 모든 변수는 자바스크립트오부터 정해지는 고유한 값을 가진다.

코드가 실행되기 전  
\-> 타입스크립트가 오류를 체크할 때는 `타입`을 가지고 있다.

타입 -> 할당 가능한 값들의 집합  
집합 -> 타입의 범위

1.  never 타입
    - 가장 작은 집합
    - 아무 값도 포함하지 않는 공집합 -> 아무런 값도 할당할 수 없음
2.  unit 타입, literal 타입
    - 한가지 값만 포함
3.  union 타입
    - 두 개 또는 세 개로 묶음
    - 값 집합들의 합집합

타입스크립트 오류에서 **할당 가능한**이라는 문구를 볼 수 있다. 집합의 관점에서, **~의 원소(값과 타입의 관계)**또는 **~의 부분 집합(두 타입의 관계)**을 의미한다.

구조적 타이핑 규칙들은 어떤 값이 다른 속성도 가질 수 있음을 의미한다. 함수 호출의 매개변수에서도 다른 속성을 가질 수 있다.  
\-> 특정 상황에서만 추가 속성을 허용하지 않는 잉여속성 체크만 생각하다 보면 간과하기 쉽다.

```
interface Person {
    name: string;
}

interface Lifespan {
    birth: Date;
    death?: Date;
}

type PersonSpan = Person & Lifespan;
```

###### & 연산자 : 두 타입의 교집합을 계산

Person, Lifespan 인터페이스는 공통 속성이 없기 때문에, PersonSpan 타입을 공집합(naver)으로 예상할 수도 있다. 하지만 타입 연산자는 인터페이스의 속성이 아닌, 값의 집합(타입의 범위)에 적용된다. 추가적인 속성을 가지는 값도 그 타입에 속한다.  
\-> Person과 Lifespan을 둘 다 가지는 값은 인터섹션 타입에 속한다.

```
const ps: PersonSpan = {
    name: 'Lotto',
    birth: newDate('1993/05/22'),
    death: newDate('2093/05/22')
};    //정상
```

name, birth, death 보다 더 많은 속성을 가지는 값도 PersonSpan 타입에 속한다.  
인터섹션 타입의 값 -> 각 타입 내의 속성을 모두 포함하는 것

속성에 대한 인터섹션에 관해서는 맞지만, 인터페이스의 유니온에서는 그렇지 않다.

```
type K = keyof (Person | lifespan);    //never

keyof (A&B) = (keyof A) | (keyof B)
keyof (A|B) = (keyof A) & (keyof B)
```

일반적으로 확장 타입을 선언하는 방법은 extends를 사용하는 것이다.

```
interface PersonSpan extends Person {
    birth: Date;
    death?: Date;
}
```

타입이 집합이라는 관점에서 extends의 의미는 **~에 할당 가능한**과 비슷하게, **~의 부분 집합**이라는 의미로 받아들일 수 있다. PersonSpan 타입의 모든 값은 문자열 name속성과, birth 속성을 가져야 한다.

서브타입: 한 집합이 다른 집합의 부분집합

#### 참고자료

<이펙티브 타입스크립트>
