import React , { useState } from "react"
import { Row , Col } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Carousel from "react-bootstrap/Carousel"

export default function Project({ img1 , img2 , img3 , imgOrder , title , description }){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <Row className="project">
        <Col md={{span:6, order:imgOrder || "first"}} lg="4">
            
            <Carousel className="project-carousel">
                <Carousel.Item className="carousel-project-image" onClick={handleShow}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item onClick={handleShow}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item onClick={handleShow}>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
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

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{description}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Visit website
                </Button>
            </Modal.Footer>
      </Modal>
    </Row> 
    )
}