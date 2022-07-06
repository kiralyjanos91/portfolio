import React from "react"
import Button from "react-bootstrap/Button"
import "./main.css"
import { Row, Col, Container } from "react-bootstrap"
import {Link} from "react-router-dom"

export default function Hero(){

    return(
        <div className="main">
            <Container>
                <Row>
                    <Col className="d-flex">
                        <div className="welcome-text align-self-center">
                            <h1 className="name">JANOS KIRALY</h1>
                            <p className="short-about">
                                Lorem ipsum dolor sit amenLorem ipsum dolor sit amenLorem ipsum dolor sit amen
                            </p>
                            <Link to="/projects">
                                <Button variant="outline-light">Contact me</Button>
                            </Link>
                            <hr/>
                            <h4>Skills:</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}