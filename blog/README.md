## Part 1 : 블로그 제작 & 기초 문법
<br>
<br>

### 01강 React 배우기 전에 쓰는 이유부터 알아야

<details>
<summary>더보기</summary>

React 왜 씁니까

리액트 문법부터 들이밀면 누구나 이해가 가지 않습니다. 

리액트의 정확한 용도를 알아야 리액트라는 라이브러리를 이해할 수 있는데 

Naver Vibe, Flipkart, Instagram 이런 웹사이트 들어가봅시다.

들어가면 페이지 전환 같은게 새로고침 없이 부드럽게 동작합니다.


이런 사이트들을 Single Page Application 이라고 하는데

- html 파일을 1개만 쓰고

- 다른 페이지를 보여주고 싶을 때 html 부분만 샥 갈아치워서 보여줍니다.

그래서 부드럽게 동작합니다. 

<br>

쌩자바스크립트로도 만들 수는 있지만 코드가 너무 길어지는 관계로

리액트라는 자바스크립트 라이브러리를 설치해서 사용하면 이걸 더 쉽게 만들 수 있습니다.

그래서 리액트라는 라이브러리를 배우고 사용하는 것입니다. 

<br>

- 리액트 쓰는 또 다른 이유들은
    - html을 함수, array, object 이런 곳에 보관하고 재사용할 수 있어서

- 큰 프로젝트일 수록 html 관리 편리해짐
    - React Native를 쓰면 같은 리액트 문법으로 모바일 앱개발도 가능합니다.

거기선 html css 문법만 약간 다릅니다.

<br>

실은 리액트와 비슷한 자바스크립트 라이브러리가 많습니다.

Vue, Svelte, SolidJS 이런게 요즘 뜨고 있긴 한데

이 중에 리액트가 가장 틀딱이고 유저가 가장 많기 때문에 리액트를 쓰도록 합시다. 
</details>
<br>

### 2강 리액트 React 설치와 개발환경 셋팅

<details>
<summary>더보기</summary>


폴더 구조

node_modules 폴더: 라이브러리 보관함

public 폴더: static 파일 모아놓는 곳

src 폴더: 코드 짜는 곳

package.json: 프로젝트 정보

#### 개발환경 셋팅


1. 구글에 Nodejs 검색해서 LTS라고 써있는 버전을 설치합시다.

- 남자답게 숫자 높은 최신버전 써도 되는데 그로 인한 버그와 배포시 에러는 알아서 감수해야함

- 설치 경로는 C드라이브 어쩌구 되어있는거 바꾸지말고 그대로 쓰는게 좋습니다.

- 설치 중 chocolatey 어쩌구는 설치 안하셔도 됩니다.


2. Visual Studio Code 에디터도 구글에 검색해서 설치합니다.

(기존 에디터 쓰셔도 되지만 터미널을 기존에 안다뤄본 분들은 필수)


Q. 맥북은 다른가요? 

A. 다른거 없음


#### 리액트 프로젝트 생성은

1. 작업용 폴더를 하나 만들어줍니다

찾기좋게 바탕화면에 만드는게 어떨까요. 

2. 폴더에 shift + 우클릭해서 여기서 powershell 열기를 누릅니다.

맥북은 손가락 두개 클릭해서 터미널열기 누르면 됩니다. 


3. 그럼 터미널이라는게 나오는데 

npx create-react-app blog  
이거 그대로 입력하고 엔터누르면 프로젝트 생성 끝입니다.

blog 대신 여러분의 리액트 프로젝트명을 기입해보십시오 

안되면 하단을 참고해서 에러를 해결해보거나 

npm create vite@latest 입력해서 Vite 써서 리액트 셋팅해도 됩니다. 이거 입력하면 터미널에 여러가지 입력하라고 핱텐데 그대로 입력하면 됩니다. 


4. 에디터에서 프로젝트 오픈하려면  

프로젝트 설치했으면 프로젝트이름의 폴더가 하나 생성되는데 (저는 blog)

그 폴더를 에디터로 오픈해서 코드짜면 됩니다.  

Visual studio code 에디터 켠 다음에 File - Open Folder 누른다음에 아까 생성된 blog 폴더 선택하면 됩니다.


5. App.js가 메인페이지임

src 폴더 안에 있는 App.js 이게 메인페이지니까 거기다가 코드짜면 됩니다. 


6. 내 사이트를 브라우저로 미리보기 띄우고 싶으면 

에디터 상단메뉴중에 Terminal - New Terminal 누릅니다. 

그럼 터미널이 뜨는데 거기다가 npm start 입력후 엔터치면 미리보기 뜹니다. 


- 저처럼 blog 같은 프로젝트명이 터미널에 안뜨면 폴더오픈을 제대로 안한것입니다. 폴더 오픈부터 잘하십쇼

- 브라우저 자동으로 안뜨면 localhost:3000 이라고 크롬 브라우저 열고 직접 입력해주세요


----------------------------------


터미널에 뭐 입력할 때 20% 확률로 에러가 뜹니다.

해결방법을 알아봅시다. 이러면 대부분 해결이고 이거 외엔 구글검색 ㄱㄱ 


Q1. 저는 리액트 프로젝트 설치가 10분 이상 오래걸려요 


스타벅스에서 하지 말고 집에서 합시다.



Q2. "npx command not found 어쩌구" 에러


- 터미널 다시 껐다 켜보세요
- 대부분 nodejs 제대로 설치 안해서 그렇습니다. 옛날 버전이라 그럴 수 있습니다.
- 맥북이면 brew 그런거 쓰지 말고 다운받읍시다.
- 윈도우는 C 드라이브에 얌전히 설치합시다.
- 리눅스는 알아서 nodejs 설치나 버전 업데이트 명령어 잘 입력하면 될듯요



Q3. 맥북인데 "permission이 없어요" 에러


프로젝트 생성시 저런 에러가 뜨면 터미널에 

sudo npx create-react-app blog 입력해보면 됩니다.

비번입력하라고 하면 맥북 비번 입력하면 됩니다.


Q4. 윈도우인데 "허가되지 않은 스크립트 입니다 어쩌구~" 에러


윈도우 하단 검색메뉴에서 Powershell 검색 - 우클릭 - 관리자 권한으로 실행한 뒤

Set-ExecutionPolicy Unrestricted

라고 대소문자 하나라도 틀리지않고 입력하고 엔터칩니다.

그 다음에 뭐 선택하라고 하면 y 누르고 엔터치면 될듯요

그럼 이제 npx, npm으로 뭐 하는거 잘됩니다.


Q5. The engine "node" is incompatible with this module 에러 


npx로 설치시 이런 에러가 있을 수 있습니다. nodejs 버전이 낮거나 너무 높다는 뜻이며 

nodejs를 요구하는 버전으로 재설치하시면 됩니다.



Q6. npm 어쩌구 입력시 안되면 


https://imspear.tistory.com/31 이런거 참고해서 환경변수 등록해봅시다.



Q7. 윈도우인데 아직도 터미널에서 뭐 하는거 안되면
- 이상한 보안프로그램 끄십시요 특히 Ahnlab security 어쩌구
- 작업폴더를 오픈한 다음 파일 - Powershell 열기 - 관리자권한으로 열기 누른 다음

거기서 npx 어쩌구 해서 프로젝트 생성해봅시다.


Q8. 그래도 뭔가 안되면


npm create vite@latest 명령어로 vite 써서 설치해도 됩니다.

설치 후엔 프로젝트 폴더 오픈해서 터미널에서 npm install 눌러야하고 

미리보기 시작 명령어는 npm run dev입니다.

이외에도 에러 경우의 수가 매우 많기 때문에 정확한 에러메시지 직접 검색이 답입니다.


#### (참고)

버전에러 등으로 강의와 같은 리액트 버전에서 코딩하고 싶다면

1. 하단 첨부파일을 압축푸신 뒤에 그 폴더를 에디터로 오픈합니다.

2. 에디터 상단에서 Terminal - New Terminal 오픈하신 다음 npm install 을 입력하시면 필요한 라이브러리들이 설치됩니다.

3. 이제 똑같이 코딩하시면 됩니다.

(문제가 생길경우 빼곤 굳이 저랑 똑같은 버전을 맞출 필요는 없습니다.)
</details>
<br>

### 3강 리액트에서 레이아웃 만들 때 쓰는 JSX 문법 3개

<details>
<summary>더보기</summary>

이상한 사람들이 리액트 쓸데없이 어렵게 가르치는데

리액트라고 뭔가 어렵고 복잡하게 코드짜야하고 그런거 아닙니다. 

그냥 기존처럼 html css 짜서 웹페이지 만들어나가면 됩니다. 

그런데 html 대신 JSX라는걸 쓰는데 이거 사용법을 알아봅시다.


리액트프로젝트의 App.js로 들어갑시다


App.js가 여러분의 메인페이지입니다.
여기 이미 채워져있던 쓸데없는 html들은 싹 비우고 시작합시다.


<div> 하나만 남기면 됩니다. 


```javascript
import 어쩌구;

function App(){
  return (
    <div className="App">
      //다지움 ㅅㄱ
    </div>
  )
}
```

이제 깔끔한 백지상태에서 시작할 수 있습니다. 

코드 수정했으면 파일 저장을 해야 미리보기 화면에서 잘 보입니다. 



#### 본격적으로 블로그 상단 nav를 제작해봅시다.

간단한 블로그를 만들어볼 것인데 상단메뉴가 있으면 좋을 것 같으니 만들어봅시다.

리액트 환경이라고 뭔가 다르고 심오하게 코드짠다고 오해하는 분들이 많은데

웹페이지 레이아웃은 그냥 옛 방식 그대로 똑같이 <div> 떡칠해서 짜면 됩니다.


```javascript
(App.js)

function App(){
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
    </div>
  )
}
```

```css
(App.css)

.black-nav {
  background : black;
  width : 100%;
  display : flex;
  color : white;
  padding : 20px;
}
```

CSS 스타일은 App.css 파일 열어서 집어넣으면 됩니다. 

저장 잘 하면 검은색 상단메뉴가 생성됩니다. 

아이잘했어요



#### JSX 문법 1. html에 class 넣을 땐 className

잘보면 평소에 짜던 html/css와 다른 부분이 있습니다.

스타일을 주기 위한 class명을 넣을 때 class=" " 가 아니라 className=" " 이렇게 쓰는 부분이 좀 다른데 

왜냐면 실은 App.js에 짜고 있는건 html이 아니라 JSX라고 부르는 이상한 언어라서 그렇습니다. 


원래 리액트환경에서 <div>하나 만들고 싶으면 자바스크립트로

React.createElement('div', null) 

이딴 식으로 어렵게 코드짜야합니다. 

근데 그러면 유저들 다 도망가기 때문에 JSX라는 언어를 대신 사용합니다.

JSX는 html과 사용방식은 비슷합니다.



근데 JSX는 일종의 자바스크립트라서 

자바스크립트에서 사용하는 예약어인 class라는 키워드를 막 사용하시면 안됩니다.

그래서 class=" " 넣고 싶으면 className이라고 써야합니다.

이것이 JSX 다루는 첫째 문법이고 외우고 지나가도록 합시다. 



#### JSX 문법 2. 변수를 html에 꽂아넣을 때는 {중괄호}

자바스크립트 변수같은 곳에 있던 자료를 

html 중간에 꽂아서 보여주고 싶을 때가 많습니다. 

어떻게 하는지 알아봅시다.


```javascript
function App(){

  let post = '강남 우동 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>블로그임</div>
        <div>여기에 저 변수에 있던거 꽂고 싶으면?</div>
      </div>
    </div>
  )
}
```

일단 위에 post라는 변수를 만들어서 잠깐 문자를 저장해놨습니다.

변수가 뭐냐고요?

변수는 길고 복잡한 자료를 잠깐 한 단어에 저장해서 쓸 수 있는 고마운 문법이고 var let const 키워드로 아무데나 만들면 됩니다. 


아무튼 저 let post 안에 있던 자료를 <div>안에 꽂아넣고 싶으면 어떻게하죠?

옛날 자바스크립트 문법을 쓴다면 document.getElementById().innerHTML = ?? 이런 식이었겠지만

리액트에서는 더 쉽게 데이터를 꽂아넣을 수 있습니다. 


```javascript
function App(){

  let post = '강남 우동 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>블로그임</div>
        <div>{ post }</div>
      </div>
    </div>
  )
}
```

중괄호안에 데이터바인딩하고 싶은 변수명만 담으시면 됩니다.

그럼 미리보기화면에서 <div>강남 우동 맛집</div> 요게 출력됩니다. 

틀딱개발자들은 여기서 매우 편리함을 느낍니다. 여러분도 뭔가 느끼는척 하십시오



```javascript
function App(){

  let post = '강남 우동 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>블로그임</div>
        <div>{ post }</div>
      </div>
    </div>
  )
}
```

온갖 곳에 {} 중괄호를 열어서 변수들을 집어넣을 수 있습니다.

href, id, className, src 등 여러가지 html 속성들에도 가능합니다.

위처럼 쓰면 <div className="red"> 이렇게 되겠군요.


참고로 변수에 있던걸 html에 꽂아넣는 작업을 있어보이는 말로 데이터바인딩이라고 합니다. 



#### JSX 문법 3. html에 style속성 넣고싶으면 

<div style="color : blue"> 이런걸 넣고 싶으면

JSX 상에서는 style={ } 안에 { } 자료형으로 집어넣어야합니다. 

```javascript
<div style={ {color : 'blue', fontSize : '30px'} }> 글씨 </div>
```

이렇게 넣어야합니다.

- { 속성명 : '속성값' } 이렇게 넣으면 됩니다. 

- 근데 font-size 처럼 속성명에 대쉬기호를 쓸 수 없습니다.


대쉬기호 대신 모든 단어를 붙여써야합니다. 붙여쓸 땐 앞글자를 대문자로 치환해야합니다. 


css 파일 열기 귀찮을 때 쓰면 됩니다. 

</details>