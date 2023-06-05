import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

export default function ModalBox({ title , show , handleClose , img1 , img2 , img3, website , github }){
   
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Carousel className="modal-project-carousel">
                    <Carousel.Item className="carousel-project-image" interval={15000}>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-project-image" interval={15000}>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-project-image" interval={15000}>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="dark" className="modal-live-button" href={website} target="_blank">
                    Live Website
                </Button>
                <Button variant="dark" className="modal-code-button" href={github} target="_blank">
                    Source Code
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

