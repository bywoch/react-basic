import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import bg from './img/bg.png'
import { useState } from 'react';
import data from './data.js'
/* import a from './data.js'
/* import {a, b} from './data.js' */

function App() {
  
  let [shoes] = useState(data);

  return (
    <div>
      <Navbar bg="lignt" variant="lignt">
        <Container>
          <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <div className="main-bg"></div> */}
      <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="shoes1.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="shoes2.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="shoes3.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>

          {/* <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/logo192.png'} />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div> */}
          {/* ↑ 이게 public 폴더 이미지 쓰는 권장방식 */}

        </div>
      </div>
    </div>
  )
}

export default App;
