import React from "react"
import { Row, Col, Button } from "react-bootstrap"

export default function Project({img, imgOrder, title, description}){
    return(
    <Row className="project">
        <Col md={{span:4, order:imgOrder || "first"}}>
            <img src={img}  className="img-fluid rounded project-image" alt="dummyproject"/>
        </Col>
        <Col>
            <Row>
                <h4 className="project-title">{title}</h4>
            </Row>
            <Row className="project-description">               
                <p>
                    {description}
                </p> 
            </Row>
            <Row>
                <Col className="d-flex project-buttons">
                    <Button variant="outline-light" className="btn" size="sm">Visit</Button>
                    <Button variant="outline-light" className="btn" size="sm">GitHub</Button>
                </Col>
            </Row>
        </Col>
    </Row> 
    )
}