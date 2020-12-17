import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import FunctionClick from './components/FunctionClick';


const Wrapper = styled.section`
  padding: 4em;
  background: white;
`;
const Title = styled.h5`
  padding-left: 8.5em;
`;

function App() {
    return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />     
     </header> 
    <Title>Interopen Care Plan Hackathon 16-17 Dec 2020</Title>  
      <Wrapper>
         
        <Container>
          <Row>
            <Col>
              <FunctionClick/>
            </Col>
          </Row>
          <Row >
            <Col lg={2}>
              
            </Col>
            <Col lg={10}><div className="p-3 border bg-light" id="query_results">Results here</div></Col>
          </Row>
        </Container>             
      </Wrapper>
 
  </div>
   );
}

export default App;
