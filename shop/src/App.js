import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import bg from './img/bg.png'
import { useState } from 'react';
import data from './data.js'
import Detail from './routes/Detail.js'
/* import a from './data.js'
/* import {a, b} from './data.js' */
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate() // 페이지 이동을 도와줌
  //Hook 유용한것들이 들어있는 함수.

  return (
    <div className='App'>

      <Navbar bg="lignt" variant="lignt">
        <Container>
          <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={
          <>
            {/* <div className="main-bg"></div> */}
            <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>
            <div className="container">
              <div className="row">
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} ></Card>
                })}

                {/* <Card shoes={shoes[0]} i={1} />
                <Card shoes={shoes[1]} i={2} />
                <Card shoes={shoes[2]} i={3} /> */}

                {/* <div className="col-md-4">
                  <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="shoes1.jpg" width="80%" />
                  <h4>{shoes[0].title}</h4>
                  <p>{shoes[0].price}</p>
                </div>
                <div className="col-md-4">
                  <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="shoes2.jpg" width="80%" />
                  <h4>{shoes[1].title}</h4>
                  <p>{shoes[1].price}</p>
                </div>
                <div className="col-md-4">
                  <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="shoes3.jpg" width="80%" />
                  <h4>{shoes[2].title}</h4>
                  <p>{shoes[2].price}</p>
                </div> */}

                {/* {<div className="col-md-4">
                  <img src={process.env.PUBLIC_URL + '/logo192.png'} />
                  <h4>상품명</h4>
                  <p>상품설명</p>
                </div>} */}
                {/* ↑ 이게 public 폴더 이미지 쓰는 권장방식 */}

              </div>
            </div>

            <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json').then((결과) => {
                let copy = [...shoes, ...결과.data]
                setShoes(copy)
              })
                .catch(() => { // ajsx 실패시 코드
                  console.log('실패함')
                })

              axios.post('URL', { name: 'kim' })
            }}>버튼</button>

          </>
        } />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        {/* <Route path="/about/member" element={ <div>멤버들</div> } />
        <Route path="/about/location" element={ <div>회사위치</div> } /> */}
        <Route path="/about" element={<About />} >
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} /> {/* 어디보여줄지 정하려면 <Outlet> */}
        </Route>
        {/* nested routes 언제씀
        - 내가 여러가지 페이지가 필요
        - 페이지가 별로 차이가 없을때
        - 이런 식으로 UI 만들면 뒤로가기 버튼 이용 가능
        - 페이지 이동이 쉬움 (UI 스위치 조작 쉬움) */}
        <Route path="*" element={<div>없는페이지임</div>} />
      </Routes>
    </div >
  )
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
