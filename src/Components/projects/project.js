import React , { useState } from "react";
import { Row , Col } from "react-bootstrap";
import ModalBox from "./modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

export default function Project({ img1 , img2 , img3 , imgOrder , title , index , description , description2 , rapidApiLink , tech , website , github , needHr }){
   
    const [show, setShow] = useState(false);
    const handleShow = () => { if (window.innerWidth >= 768) { setShow(true) } };
    const handleClose = () => setShow(false);
    const toolsUsed = tech.map((tool,index)=>
        <span className="tools" key={index}>{tool}</span>
    )

    return(
        <>
            <Row className="project">
                <Col md={{span:6, order:imgOrder}} lg="4">
                    <Carousel className="project-carousel">
                        <Carousel.Item className="carousel-project-image main-carousel-image" onClick={handleShow} interval={15000}>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-project-image main-carousel-image" onClick={handleShow} interval={15000}>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-project-image main-carousel-image" onClick={handleShow} interval={15000}>
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
                    { index === 0 &&

                        <Row
                            className = "guest-pass"
                        >
                            <p>
                                Guest Username: <span>user001</span>
                            </p>
                            <p>
                                Guest Password: <span>Password123</span>
                            </p>
                        </Row>
                    }
                    <Row className="project-description">               
                        <p>
                            {description}
                        </p>
                        { rapidApiLink &&
                            <>
                                <p>
                                    <a 
                                        href = "https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies/" 
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rapid-link"
                                    >
                                        {rapidApiLink}
                                    </a>
                                </p>
                                <p>
                                    {description2}
                                </p>
                            </>

                        }
                        <p>Tools Used:</p>
                        <div className="tools-div">{toolsUsed}</div>
                    </Row>
                    <Row>
                        <Col className="d-flex project-buttons">
                            <Button variant="outline-light" className="btn live-button" size="sm" href={website} target="_blank">Live Website</Button>
                            <Button variant="outline-light" className="btn code-button" size="sm" href={github} target="_blank">Source Code</Button>
                        </Col>
                    </Row>
                </Col>
                <ModalBox
                    title={title}
                    show={show}
                    handleClose={handleClose}
                    img1={img1}
                    img2={img2}
                    img3={img3}
                    website={website}
                    github={github}
                />
            </Row> 
        {needHr ? <hr /> : null}
    </>
    )
}