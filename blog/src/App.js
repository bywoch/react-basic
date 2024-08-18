/* eslint-disable */ //WARNING 메세지 끄는 기능.
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // Array 자료 형식
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">

      <div className="black-nav">
        <h1>ReactBLog</h1>
      </div>

      <button onClick={() => {
        let copy = [...글제목]; // ...← 은 괄호 벗겨주세요
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
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
      {/* return 안에는 병렬로 2개 이상 태그 금지 */}
    </div>
  );
}

function Modal() { // ← 컴포넌트라고 부름
  return (
    <>
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
let Modal = () => {
  return (
  )
}

// const는 반복 작명을 막아준다
const Modal = () => {
  return (
  )
}
*/

/*

JSX 문법1. class를 넣을땐 className 
JSX 문법2. 변수 넣을땐 {중괄호}
<div>{post}</div>
JSX 문법3. style 넣을땐 style={} 
<div style={{ color: 'blue', fontSize: '30px' }}> 글씨 </div>

컴포넌트 만드는 법.
  - function 만들고
  - return () 안에 html 담기.
  - <함수명></함수명> 쓰기

  - 의미없는 <div> 대신 <></> 사용 가능

어떤걸 를 만들면 좋을까
  - 반복적인 html 축약할때
  - 큰 페이지들
  - 자주 변경되는 것들

컴포넌트의 단점
  - state 가져다 쓸 때 문제 생김
  - return () 안에는 병렬로 태그 2개 이상 기입 금지
  - useState 는 자료를 잠깐 저장
  - let [작명, 작명(State 변경을 도와주는 함수)] = useState ('보관할 자료');
  - 두 번째 작명을 써줘야 html 재렌더링이 가능함
  - State 변경하는 법은 항상 state 변경함수를 쓰기! ex: state변경함수(새로운 state)

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

  [state 변경 함수 특징]
  기존 state == 신규 state의 경우 변경 안 해줌
*/

/* 
  let post = '강남 우동 맛집'; //변수는 오른쪽에 있는 이름을 왼쪽에 보관해주세요.
  let [글제목, a] = useState('남자 코트 추천');
  let [맛집추천, b] = useState('강남 우동 맛집');
  let [공부하기, c] = useState('파이썬독학'); 
*/