# to-do-list-project

## 240219 DAY 01 : 프로젝트 계획

### 프로젝트: 주간, 일간 할일를 작성할 수 있는 앱

### 목표 : react의 다양한 hooks 이해하기, node.js의 CRUD 구현하기, tailwind 사용법 적응하기

### 사용할 언어 : [![react ](https://img.shields.io/badge/react-61DAFB?style=flat&logo=React&logoColor=white)]() [![tailwind](https://img.shields.io/badge/tailwind-06B6D4?style=flat&logo=TailwindCSS&logoColor=white)]() [![node.js](https://img.shields.io/badge/node.js-339933?style=flat&logo=Node.js&logoColor=white)]()

### 구현기능

#### - 회원 가입

#### - 로그인

#### - 주간 할일 입력

#### - 주간 할일 목록

#### - 주간 할일 세부 사항 - 수정, 삭제

#### - 일간 할일 입력

#### - 일간 할일 목록

#### - 일간 할일 세부 사항 - 수정, 삭제

## 240219 DAY 01 : Sidebar

#### 디자인은 React 완벽 가이드 Section 9 연습 프로젝트를 참고함

### Your Weekly Plans

#### - Add Plan을 누르면 우측의 공간에 주간 일정 form 이 생기고 그 form을 입력하고 저장하면 your weekly plans 안에 주간 일정이 삽입되게 할 예정

### OTHER USER'S PLAN

#### - 오늘 할일을 입력한 유저는 밝게 입력안한 유저는 흐리게 처리할 예정

![sidebar](https://github.com/narahub123/to-do-list-project/assets/93567002/64cef948-c121-4281-8c99-e25106e9b152)

## 240219 DAY 01 : NewWeeklyPlan

### Weekly Plan

#### - 기존에 입력된 계획이 있다면 주간 계획이 뜨고 없다면 없다는 것을 표시한 후 버튼을 통해서 계획 폼이 보이게 할 예정

![108](https://github.com/narahub123/to-do-list-project/assets/93567002/88cf996d-1717-47ea-b829-03a47a18fcfe)

#### - 16:24 useState()를 이용한 화면 변경 완료 : 이해가 더 필요함

#### - 17: 29 useRef()에 대한 이해가 더 필요함

#### - Accordion Study

[![Accordian](https://img.youtube.com/vi/dciqfn6vRxc/0.jpg)](https://www.youtube.com/watch?v=dciqfn6vRxc)
![110](https://github.com/narahub123/to-do-list-project/assets/93567002/b8fc1d9a-65be-4f2e-a96d-2204e70eb4af)

#### - TroubleShot 23: 05 accordian 공부 중 에러 발생 - h-screen 때문에 발생한 듯

![image](https://github.com/narahub123/to-do-list-project/assets/93567002/971a3c29-d475-4e50-a015-15d9c3696884)

## Day 2 Accordion 완성하기

### 목표

#### - ~~중첩된 아코디언 만들기~~

#### - node.js와 연결해서 db에 내용 저장하기

### 문제

#### - 중첩된 아코디언과 부모 아코디언의 state를 구별하는 방법

#### - 추가되는 일정이 기존 일정과 중첩되는 경우 사이드바 리스트가 추가되는 것이 아닌 리스트안에 추가하는 방법

#### - 같은 주간 일정 중 시작일과 종료일이 다른 경우 구별 방법

### Accordion Study II

#### 중첩된 아코디언을 찾다가 아코디언을 더 쉽게 작성할 수 있는 영상을 찾음

[![Accordian](https://img.youtube.com/vi/oOXExNA8A48/0.jpg)](https://www.youtube.com/watch?v=oOXExNA8A48)

![111](https://github.com/narahub123/to-do-list-project/assets/93567002/814152e4-4856-40d0-be92-6c5315f3f655)

#### 중첩 아코디언

![112](https://github.com/narahub123/to-do-list-project/assets/93567002/d3f3067b-8329-402c-ad0a-c705659d188e)

#### 중첩 아코디언 적용

![113](https://github.com/narahub123/to-do-list-project/assets/93567002/f5b38345-c27e-4eff-bfe0-85d44bc7b938)

### react와 Node.js 연결

#### 10:31 TroubleShooting - TypeError: Cannot destructure property 'from' of 'req.body' as it is undefined.

#### Server.js에서 app.use(express.json()) 을 빼먹음..

#### 24-02-21 from과 to의 schemaType을 date에서 String으로 변경 - YYYY-mm-dd로 입력해도 mongoDB에서 YYYY-mm-dd-HH-mm-ss형식으로 저장되기 때문에

## DAY 3 월간 할일 CRUD 완성하기

### 목표

#### - 월간 할일 CRUD 완성하기

#### - 월간 할일 불러올 때 연간, 월간, 주간으로 묶어서 가져오는 방법 생각해보기

### 월간 할일 DB에서 불러오기

![image](https://github.com/narahub123/to-do-list-project/assets/93567002/4bd7eb06-125c-4687-8bf2-7113b603e160)

### 월간 할일 DB에 추가 : 14:58

#### - useRef를 이용해서 성공

#### - db 추가 후 바로 사이드바에 반영되도록 하기

#### - react에서 node.js로 데이터를 전송할 때 내가 생각했던 것과 다른 형식으로 전송이 됨 : 데이터 전송과 관련해서 조금 더 공부가 필요한 듯

#### - 데이터 전송시 형식 문제가 발생하면 서버가 에러 발생으로 멈추는 현상이 발생함 - error handling을 조금 더 신경써야 할 듯

#### - 할일을 추가한 날짜도 model에 추가해야 할 듯

### 월간 할일 상세 보기 17:33 완성

#### 기존 코드는 id를 Math.random()을 이용하는데 mongoDB의 \_id를 이용하는 방법

![114](https://github.com/narahub123/to-do-list-project/assets/93567002/6d1f4bd8-33e1-4bbf-a758-d8a2a4d3099a)

### 월간 할일 수정하기 24 02 22 01:33 완성

#### - 수정 후 기존 페이지로 되돌아가기 추가 해야 함

#### - 아직 언제 useState를 사용하고 언제 useRef를 사용하는 것이 좋은지가 명확하지 않음

![115](https://github.com/narahub123/to-do-list-project/assets/93567002/37cb04e3-0e20-49e5-adae-afcdf69ecc00)

### 월간 할일 삭제하기 24 02 22 01:47 완성

![116](https://github.com/narahub123/to-do-list-project/assets/93567002/f4cd65eb-fdf3-4955-a25e-d2d5797305cc)

## Day 4 코드 수정 하기

#### - error handling

#### - modal

#### - validation

#### - page navigation, 사이드바에도 즉각적으로 반영

#### - ~rest api 수정~ : 0909 기존 post method를 사용해서 수정, 삭제한 것을 patch와 delete로 변경
