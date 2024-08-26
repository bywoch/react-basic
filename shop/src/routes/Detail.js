import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
/* import styled from 'styled-components' // 나는 CSS 파일이 아닌 JS 파일 안에서 해결을 하고 싶다

let Box = styled.div`
  padding : 20px;
  color : grey
`;
let YellowBtn = styled.button`
background : ${props => props.bg};
  color : ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px; 
`; */

/* 
styled-components 장점
- CSS 파일 안 열어도 됩니다
- 스타일이 다른 js파일로 오염되지 않음
*/

/* 
단점1. JS 파일이 매우 복잡해집니다. 그리고 이 컴포넌트가 styled 인지 아니면 일반 컴포넌트인지 구분도 어렵습니다.
단점2. JS 파일 간 중복 디자인이 많이 필요하면 어쩌죠? 다른 파일에서 스타일 넣은 것들 import 해와서 쓰면 됩니다. 근데 그럼 CSS파일 쓰는거랑 차이가 없을 수도요
단점3. CSS 담당하는 디자이너가 있다면 협업시 불편할텐데 그 사람이 styled-components 문법을 모른다면 그 사람이 CSS로 짠걸 styled-components 문법으로 다시 바꾸거나 그런 작업이 필요하겠군요. 그래서 신기술같은거 도입시엔 언제나 미래를 생각해보아야합니다.
*/


//옛날 React에서 Lifecycle hook 쓰는 법
/* class Detail2 extends React.Component {
    componentDidMount() {
        //Detail2 컴포넌트가 로드되고나서 실행할 코드
    }
    componentDidUpdate() {
        //Detail2 컴포넌트가 업데이트 되고나서 실행할 코드
    }
    componentWillUnmount() {
        //Detail2 컴포넌트가 삭제되기전에 실행할 코드
    }
} */

function Detail(props) {


    useEffect(() => {
        //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
        // useEffect 안에 있는 코드는 html 렌더링 후에 동작
        /* 
        - 어려운 연산
        - 서버에서 데이터 가져오는 작업
        - 타이머 장착하는거
         */
        console.log('안녕')
    });

    // 자바스크립트로 X초 후에 코드를 실행하고 싶으면 setTimeout이라는 함수를 사용합니다.
    /* setTimeout( ()=>{  1초 후 실행할 코드 }, 1000); */

    let [count, setCount] = useState(0)

    let { id } = useParams();
    console.log(id)

    let [alert, setAlert] = useState(true)

    useEffect(() => {
        // 서버로 데이터 요청하는 코드에 많이씀
        let a = setTimeout(() => { setAlert(false) }, 2000)
        return () => {
            // 이게 먼저 동작함
            clearTimeout(a)
        }
    }, [])

    /* 
    빡통식 정리시간

    useEffect(() => { 실행할코드 }) // 재렌더링마다 코드를 실행가능

    useEffect(() => { 실행할코드 }, []) // 컴포넌트 mount시 (로드시) 1회만 실행가능

    useEffect(() => { // useEffect 안의 코드 실행 전에 항상 실행
        return () => {
            실행할코드
        }
    })

    useEffect(() => { // 컴포넌트 unmount시 1회 실행
        return () => {
            실행할코드
        }
    }, [])

    useEffect(() => { // state1이 변경될 때만 실행
        실행할코드
    }, [state1])
    */

    return (
        <div className="container">
            {/* <Box>
                <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
                <YellowBtn bg="orange">오렌지색 버튼임</YellowBtn>
            </Box> */}
            {
                alert == true
                    ? <div className="alert alert-warning">
                        2초이내 구매시 할인
                    </div>
                    : null
            }
            <button onClick={() => { setCount(count + 1) }}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[0].content}</p>
                    <p>{props.shoes[0].price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail