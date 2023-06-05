import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./projects.css";
import projectData from "./projects-data";
import Project from "./project";
import { motion } from "framer-motion";

const animationStages = {
    hidden:{
        opacity:0
    },
    show:{
        opacity:1,
        transition:{
            duration:0.75
        }
    }
}

export default function Projects(){
    const navigate = useNavigate()

    const projectsList = projectData.map((project,index) =>
            <Project
                img1={project.img1}
                img2={project.img2}
                img3={project.img3}
                img4={project.img4}
                title={project.title}
                description={project.description}
                tech={project.tech}
                website={project.website}
                github={project.github}
                imgOrder={index % 2 === 0 ? "last" : "first"}
                needHr = {index !== (projectData.length - 1)}
                key={index}
            />
        )

    return(
        <motion.div className="projects"
            variants={animationStages}
            initial="hidden"
            animate="show"
        >
            <Container>
                <Row className="projects-headline-row">
                    <Col>
                        <h1 className="projects-title">PROJECTS</h1>
                    </Col>
                    <Col className="home-button-col">
                        <Button
                            className="home-button"
                            variant="outline-light"
                            onClick={()=>{navigate(-1)}}
                        >
                            Home
                        </Button>
                    </Col>
                </Row>   
                {projectsList}
            </Container>
        </motion.div>
    )
}

