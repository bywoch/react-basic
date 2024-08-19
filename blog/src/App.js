/* eslint-disable */ //WARNING 메세지 끄는 기능.
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// React 컴포넌트의 시작, 모든 UI는 이 함수에서 정의
function App() {

  // Array 자료 형식
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  //let [따봉, 따봉변경] = useState(0);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">

      <div className="black-nav">
        <h1>ReactBLog</h1>
      </div>
      <br />
      {/* 버튼을 클릭하면 첫 번째 글 제목을 변경하는 로직 */}
      <button type='button' onClick={() => {
        /*
        글제목[0] = '여자코트 추천'; ← 영구적으로 수정해버림
        글제목 배열의 첫 번째 요소를 직접 수정하는 것은 안티패턴
        React에서 상태를 직접 수정하는 대신, 복사본을 만들고 수정해야함
        - array/objaect 다룰때 원본은 보존하는게 좋음
         */
        //
        let copy = [...글제목]; // ...← 은 array를 새로 바꿔주세요/괄호 벗겨주세요

        /* copy[0] = '여자 코트 추천'; */

        /* if (copy[0] === '남자 코트 추천') {
          copy[0] = '여자 코트 추천';
        } else {
          copy[0] = '남자 코트 추천';
        } */

        // if-else 구조가 아닌 삼항 연산자
        copy[0] = copy[0] === '남자 코트 추천' ? '여자 코트 추천' : '남자 코트 추천';

        글제목변경(copy);
        // state가 '글제목'처럼 array/object면 독립적 카피본(shallow copy)을 만들어서 수정해야 함
      }}>글수정</button>
      <br />

      {/*<div className="list">
        <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div> 
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => { setModal(!modal) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      */}

      {/* <Modal></Modal> */}
      {/* </Modal> 만 써도 가능*/}

      {
        글제목.map(function (a, i) { // 'a'는 배열의 요소, 'i'는 인덱스, 'i'는 반복문이 돌 때마다 1씩 증가하는 정수
          return (
            <div className="list">
              <h4>
                {글제목[i]} {/* 각 글 제목을 출력 */}
                <span onClick={(e) => {
                  e.stopPropagation();
                  // e.stopPropagation ← 상위 html로 퍼지는 이벤트 버블링을 막아줌
                  // 따봉 배열을 복사한 후, 해당 글의 따봉 수를 1 증가
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy); // 상태를 업데이트
                }}>👍</span> {따봉[i]}
              </h4>
              <p>2월 18일 발행</p>
              <button type='button' onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
            </div>)
        })
      }

      <br />
      <button type='button' onClick={() => { setModal(!modal) }}>모달더보기</button>
      <br />

      <br />
      <button type='button' onClick={() => { setTitle(0) }}>글제목1</button>
      <button type='button' onClick={() => { setTitle(1) }}>글제목2</button>
      <button type='button' onClick={() => { setTitle(2) }}>글제목3</button>
      <br />

      {/* 이벤트 핸들러 */}
      <input type="text" name="text1" id="text1" onChange={(e) => {
        입력값변경(e.target.value);
        // console.log(입력값);
      }} />

      <button type='button' onClick={() => {
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);  // 상태 업데이트를 위해 copy를 인자로 전달
      }}>급발행</button>

      {/* return 안에는 병렬로 2개 이상 태그 금지 */}
      {
        modal == true ? <Modal title={title} 글제목={글제목} />
        /* modal == true ? <Modal color={'skyblue'} 글제목변경={글제목변경} 글제목={글제목}/> */ : null // null은 비어있는 html 용으로 자주 사용.
      }
      {/* 내부는 html 문법이기 때문에 if 문을 쓸 수가 없다  
      그래서 삼항 연산자를 쓴다
      ※ '조건식 ? 참일 때 실행할 코드 : 거짓일 때 코드'*/}
      <Modal2></Modal2>
    </div>
  );
}

function Modal(props) { // ← 이런 구조를 컴포넌트라고 부름
  return (
    <> {/* 의미없는 <div> 쓰는 대신 <></> 사용해서 감싸줌 */}
      <div className="modal" style={{ background: props.color }}>
        {/* <h4>{props.글제목[0]}</h4> */}
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        {/* <button type='button' onClick={() => {props.글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬독학'])}}>글수정</button> */}
      </div>
      <div></div>
    </>
  )
}

// class 컴퍼넌트 문법
class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kim',
      age: 20
    }
  }
  render() {
    return (
      <div>안녕 {this.state.name}
        <button onClick={() => {
          this.setState({ age: 21 })
        }}></button>
      </div>
    )
  }
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

<h4 onClick={()=>{setModal(true)}}>{글제목[2]}</h4>
  ↑ 일반 자바스크립트 였다면 버튼 누르면 html을 직접 건들지만, 리액트에선 버튼을 누르면 스위치(state)만 건드림! ← 이 방식으로 정신 개조 필요ㅋ

map 반복문
var array = [2,3,4];
array.map(function(){
  console.log(1)
});
저러면 진짜로 console.log(1) 3번 실행됨 

1. array 자료 갯수만큼 함수안의 코드 실행해줌
2. 함수의 파라미터는 array안에 있던 자료임
3. return에 뭐 적으면 array로 담아줌

-

props
부모 → 자식 state 전송하는 법
1.<자식컴포넌트 작명={state이름}>
2. props 파라미터 등록 후, "props.작명" 사용
*props 전송은 부모 → 자식끼리만 전송 가능
*컴포넌트가 많아지면 props 쓰기가 귀찮아짐

-

class 란?
- 변수, 함수 보관함

*/

/* 
  let post = '강남 우동 맛집'; //변수는 오른쪽에 있는 이름을 왼쪽에 보관해주세요.
  let [글제목, a] = useState('남자 코트 추천');
  let [맛집추천, b] = useState('강남 우동 맛집');
  let [공부하기, c] = useState('파이썬독학'); 
*/