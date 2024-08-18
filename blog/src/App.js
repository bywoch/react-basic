import logo from './logo.svg';
import './App.css';

function App() { // ← 실은 html이 아니라 JSX임 (.js 파일에서 쓰는 html 대용품)
  let post = '강남 우동 맛집';
  return (
    <div className="App">

      {/* JSX 문법1. class를 넣을땐 className */}
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      {/* JSX 문법2. 변수 넣을땐 {중괄호} */}
      <div>{post}</div>

      {/* JSX 문법3. style 넣을땐 style={} 
      <div style={{ color: 'blue', fontSize: '30px' }}> 글씨 </div>
      */}
    </div>
  );
}
/* (참고) 에러메세지는 터미널/브라우저/개발자도구에서 확인*/
export default App;
