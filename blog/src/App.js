/* eslint-disable */ //WARNING 메세지 끄는 기능.
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // Array 자료 형식
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  
  return (
    <div className="App">

      <div className="black-nav">
        <h1>ReactBLog</h1>
      </div>

      <button onClick={() => {
        /*
        글제목[0] = '여자코트 추천'; ← 영구적으로 수정해버림
        // array/objaect 다룰때 원본은 보존하는게 좋음
        */
       //
        let copy = [...글제목]; // ...← 은 array를 새로 바꿔주세요/괄호 벗겨주세요

        copy[0] = '여자 코트 추천';
        글제목변경(copy);
        //  state가 '글제목'처럼 array/object면 독립적 카피본(shallow copy)을 만들어서 수정해야 함
      }}>글수정</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        {/* <h4 onClick={()=>{setModal(true)}}>{글제목[2]}</h4> */}
        <h4 onClick={()=>{setModal(!modal)}}>{글제목[2]}</h4>
        {/* ↑ 일반 자바스크립트 였다면 버튼 누르면 html을 직접 건들지만, 리액트에선 버튼을 누르면 스위치(state)만 건드림! ← 이 방식으로 정신 개조 필요ㅋ*/}
        <p>2월 17일 발행</p>
      </div>
      {/* <Modal></Modal> */}
      {
        /* 내부는 html 문법이기 때문에 if 문을 쓸 수가 없다
        그래서 삼항 연산자를 쓴다 
        '조건식 ? 참일 때 실행할 코드 : 거짓일 때 코드'
        */
       modal == true ? <Modal/> : null // null은 비어있는 html 용으로 자주 사용.
      }
      {/* </Modal> 만 써도 가능*/}
      {/* return 안에는 병렬로 2개 이상 태그 금지 */}
    </div>
  );
}

function Modal() { // ← 이런 구조를 컴포넌트라고 부름
  return (
    <> {/* 의미없는 <div> 쓰는 대신 <></> 사용해서 감싸줌 */}
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  )
}

export default App;

/*

- return() 안에는 병렬로 태그 2개 이상 기입 금지
- useState 는 자료를 잠깐 저장
- let [작명, 작명(State 변경을 도와주는 함수)] = useState ('보관할 자료');
- 두 번째 작명을 써줘야 html 재렌더링이 가능함
- State 변경하는 법은 항상 state 변경함수를 쓰기! ex: state변경함수(새로운 state)

JSX 문법1. class를 넣을땐 className 
JSX 문법2. 변수 넣을땐 {중괄호}
<div>{post}</div>
JSX 문법3. style 넣을땐 style={} 
<div style={{ color: 'blue', fontSize: '30px' }}> 글씨 </div>

  - [] 는 destructuring 변수생성 문법 (Array 자료형)

  let num = [1, 2]; 
  
  let a = [0];
  let c = [1];
  ↓
  let [a, c] = [1, 2];
  
  Q. 왜 State 써야함?
  일반 변수는 갑자기 변경되면 html에 자동으로 반영 안 됨
  State는 갑자기 변경되면 State 쓰던 html은 자동 재렌더링됨

  빡대가리식 정리:
  - 자주변경될 것 같은 html 부분은 state로 만들어 놓기.

  자주변경될 것 같은 데이터들은 state에 저장했다가 html에 {데이터바인딩} 해놓으십시오
  1. 변경할 일이 없는 데이터들
  2. 굳이 html에 표기가 필요없는 데이터들은 그냥 변수에 저장해도 됩니다. 

  - onClick={} 안엔 함수 이름을 넣어야 함.

  ※※※[state 변경 함수 특징]※※※
  기존 state == 신규 state의 경우 변경 안 해줌

컴포넌트 만드는 법.
  - function 만들고
  - return () 안에 html 담기.
  - <함수명></함수명> 쓰기

  - 의미없는 <div> 대신 <></> 사용 가능

어떤걸 컴퍼넌트로 만들면 좋을까
  - 반복적인 html 축약할때
  - 큰 페이지들
  - 자주 변경되는 것들

컴포넌트의 단점
  - state 가져다 쓸 때 문제 생김 (A함수에 있던 변수는 B함수에서 맘대로 가져다 쓸 수 없음)

// 컴포넌트 만드는 문법 2
1.
let Modal = () => {
  return (
  )
}

2.
// const는 반복 작명을 막아준다
const Modal = () => {
  return (
  )
}

[동적인 UI 만드는 step]
1. html, css로 미리 디자인 완성
2. UI의 현재 상태를 state로 저장
3. state에 따라 UI가 어떻게 보일지 자성
*/

/* 
  let post = '강남 우동 맛집'; //변수는 오른쪽에 있는 이름을 왼쪽에 보관해주세요.
  let [글제목, a] = useState('남자 코트 추천');
  let [맛집추천, b] = useState('강남 우동 맛집');
  let [공부하기, c] = useState('파이썬독학'); 
*/