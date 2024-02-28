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

#### - ~page navigation, 사이드바에도 즉각적으로 반영~

#### - 0925 update 변경

![117](https://github.com/narahub123/to-do-list-project/assets/93567002/a102aa34-0bc3-43da-ae40-48be3b941666)

#### - 1021 create 변경

![118](https://github.com/narahub123/to-do-list-project/assets/93567002/7dbec512-80b1-49ba-9dd3-c4bccf85bc91)

#### - ~rest api 수정~ : 0909 기존 post method를 사용해서 수정, 삭제한 것을 patch와 delete로 변경

#### - modal && validation

#### 1. 빈칸에 대한 유효성 검사를 하는 모달 - 1727 완료

#### - 1645 troubleshooting : 모달창 안에서도 글씨 부분과 글씨부분이외의 부분이 구분되어서 글씨부분을 클릭하면 모달창이 닫히지 않는데 그 이외의 부분을 클릭하면 모달창이 닫힘

![119](https://github.com/narahub123/to-do-list-project/assets/93567002/ad2e6015-162e-4294-8fab-93d2bbc3e1d8)

#### 1709 wrapper를 이용해서 해결했지만 코드가 많아서 불만..

![120](https://github.com/narahub123/to-do-list-project/assets/93567002/65d74ddc-e57c-4f05-b86f-096004ea9d23)

#### 2. 시작 날짜와 종료 날짜에 대한 유효성 검사 - 1821 완료 : useState()

![121](https://github.com/narahub123/to-do-list-project/assets/93567002/ba8148ea-a26b-4885-a39c-9770efccdbb1)
![122](https://github.com/narahub123/to-do-list-project/assets/93567002/fe59a43f-a017-4c39-90e7-cc5316539e24)

#### sidebar accordion refactoring - 2343 완료 (?) : json

![123](https://github.com/narahub123/to-do-list-project/assets/93567002/716fca03-b1f1-4911-87e4-95a2178b3de3)

#### troubleshooting 키 값을 고려하지 않고 데이터 구조를 바꿔서 클릭시 보이는 화면을 바꿔야 함

#### - error handling

## DAY 5 디자인 수정 하기 - 칸반 스타일로 변경

### 칸반 헤더 - 19:00 완료

#### - 이번달에 속한 주들 보여주기

#### - 이번주에 하이라이트 주기

![image](https://github.com/narahub123/to-do-list-project/assets/93567002/f02ec16a-5618-454e-b01a-09e519d6d86b)

#### - 저장된 일정 개수 세기

![image](https://github.com/narahub123/to-do-list-project/assets/93567002/18a6bb9b-ba7a-47c5-b1d0-60e6b4fb7667)

## 칸반 카드

#### - 카드 스타일링

![image](https://github.com/narahub123/to-do-list-project/assets/93567002/4e8071bf-c599-4b44-9a2d-211e4c4d9e17)

#### - 드래그 앤 드롭 표시하기

![image](https://github.com/narahub123/to-do-list-project/assets/93567002/030fe4b1-73a1-4c46-924e-bbab63f10659)

#### - 휴지통 만들기

![125](https://github.com/narahub123/to-do-list-project/assets/93567002/483a2dfb-25a9-442d-a037-f020ad5cb821)

#### - 새 카드 추가

![126](https://github.com/narahub123/to-do-list-project/assets/93567002/1c33e2bd-31fe-4ca6-89e8-7b71df44c65d)

#### - 카드 레이아웃 변경

![127](https://github.com/narahub123/to-do-list-project/assets/93567002/c42461ce-58f5-462d-a63b-50220a521fc4)

#### - 카드 추가 및 유효성 검사

![128](https://github.com/narahub123/to-do-list-project/assets/93567002/aba3bba1-4e82-4481-b37c-5d69e16d8737)

## DAY 5 CRUD 끝내기

### 삭제 1803 완성

#### 드래그 앤 드롭

![129](https://github.com/narahub123/to-do-list-project/assets/93567002/cc4a2040-c5a3-4d41-8564-ea9d4b80022d)

#### 모달

![130](https://github.com/narahub123/to-do-list-project/assets/93567002/e3ee0889-7009-41c9-b51a-ea6129331bff)

### 수정 1113 완료

## Day 6 Crud 완료하기

#### db와 연결과 유효성 검사 완료

![131](https://github.com/narahub123/to-do-list-project/assets/93567002/e4fe4116-b39b-4f86-a98b-953fb62698dd)

### troubleshooting

#### 모달 버튼에 보더가 생김

![image](https://github.com/narahub123/to-do-list-project/assets/93567002/5073baee-0eeb-42a9-9d6d-99191dd70d90)

#### - button className에 outline-0을 추가하니까 없어짐

## Day 7

### 모션 추가하기

![132](https://github.com/narahub123/to-do-list-project/assets/93567002/442550c7-041d-4efe-b739-9ed44ddeccfd)

### 컬럼 하이라이트 - draggable

![133](https://github.com/narahub123/to-do-list-project/assets/93567002/fad77e2b-1786-4ace-bdb0-790e52d3d8b6)

### 구분자 하이라이트

![134](https://github.com/narahub123/to-do-list-project/assets/93567002/bac47a18-9721-4617-b156-5455defc0cd3)

### troubleshooting - 일요일에 그 다음주의 컬럼에 하이라이트가 됨

![image](https://github.com/narahub123/to-do-list-project/assets/93567002/6dac443e-2ea7-4060-8091-2f6bbd5cc5df)

#### 주 번호를 부여할 때 새해 첫날을 잘못 세팅함

#### const startOfYear = new Date(dataObject.getFullYear(), 0, 0);

#### -> const startOfYear = new Date(dataObject.getFullYear(), 0, 1);

### 드래그 앤 드롭

#### trouble shooting 1834

#### - 같은 컬럼에서는 이동 가능 - 실제 db랑 연결했을 때는 어떻게 처리해야 할지 생각해야 됨

#### - 다른 컬럼인 경우 이동 안함 - 배열로 봤을 때는 이동을 하지만 실제로는 이동하지 않음

#### - db랑 card에 저장된 정보 다른 것에 대한 처리

![135](https://github.com/narahub123/to-do-list-project/assets/93567002/6a2b6daf-1e73-474b-9d11-2d2aa12e8cd0)
![image](https://github.com/narahub123/to-do-list-project/assets/93567002/7094ef3d-3817-4fa0-8211-f836d89fa836)

## Day 8 링크드 리스트 적용

### PUT method

#### 새 일정 등록시 add card 컴포넌트 바로 위의 card의 id를 받아온 후 생성된 카드의 id를 next 속성에 넣어줌

![image](https://github.com/narahub123/to-do-list-project/assets/93567002/83d01f83-919c-4ced-97b4-c3db7b1a5d28)

## Day 9 사이드바 디자인 변경

#### 라우터 적용

### 페이지 분배

![image](https://github.com/narahub123/to-do-list-project/assets/93567002/247091a4-bae4-4e11-9257-49b148797716)

### 라우터 설정

#### react-router-dom 이용

![151](https://github.com/narahub123/to-do-list-project/assets/93567002/b6d5f44b-52d4-46aa-8df4-4741102fbd6d)


### 사이드바 레이아웃
![image](https://github.com/narahub123/to-do-list-project/assets/93567002/2df0523f-2140-423b-b9de-2974f95cfc56)