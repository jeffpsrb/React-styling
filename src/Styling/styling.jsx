import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class StylingComponent extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Navbar bg="primary" data-bs-theme="dark">
                        <Container>
                        <Navbar.Brand href="#home">PORTOFOLIO</Navbar.Brand>
                        <Nav className="justify-content-end">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div>
                        <div class="bg-primary p-5 rounded-lg m-6 bg">
                            <h1 class="display-2 text-white">Portofolio</h1>
                            <p class="lead text-white">An 8th-semester student majoring in electrical engineering from Del Institute of Technology. <br /> 
                                Trusted as a labassistant for 6 months and has internship experience at PT. Syntek Otomasi Indonesia. has an interest <br /> 
                                inprogramming, especially in the field of web development and machine learning.
                            </p>
                        </div>
                </div>
                <div>
                <Container className="content">
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    Gambar
                                </Col>
                                <Col>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and 
                                    typesetting industry. Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the 1500s, when an unknown 
                                    printer took a galley of type and scrambled it to make a 
                                    type specimen book. It has survived not only five centuries, 
                                    but also the leap into electronic typesetting, remaining 
                                    essentially unchanged. It was popularised in the 1960s 
                                    with the release of Letraset sheets containing Lorem Ipsum 
                                    passages, and more recently with desktop publishing software 
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </Col>
                                <Col>
                                    Gambar
                                </Col>
                                <Col>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and 
                                    typesetting industry. Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the 1500s, when an unknown 
                                    printer took a galley of type and scrambled it to make a 
                                    type specimen book. It has survived not only five centuries, 
                                    but also the leap into electronic typesetting, remaining 
                                    essentially unchanged. It was popularised in the 1960s 
                                    with the release of Letraset sheets containing Lorem Ipsum 
                                    passages, and more recently with desktop publishing software 
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </Col>
                                <Col>
                                    Gambar
                                </Col>
                                <Col>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and 
                                    typesetting industry. Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the 1500s, when an unknown 
                                    printer took a galley of type and scrambled it to make a 
                                    type specimen book. It has survived not only five centuries, 
                                    but also the leap into electronic typesetting, remaining 
                                    essentially unchanged. It was popularised in the 1960s 
                                    with the release of Letraset sheets containing Lorem Ipsum 
                                    passages, and more recently with desktop publishing software 
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </div>
        )
    }
}