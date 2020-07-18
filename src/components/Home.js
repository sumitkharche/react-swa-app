import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import Login from './Login';


const Home = () => {
    return (
        <Container className="p-3">
            <Row>
                <Col>
                    <Jumbotron>
                        <h1 className="header">Welcome to React Static Web App </h1>
                        <Login />
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Home