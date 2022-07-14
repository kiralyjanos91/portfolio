import React from "react"
import {useNavigate} from "react-router-dom"
import { Row, Col, Container, Button } from "react-bootstrap"
import "./projects.css"
import DummyProject from "../../images/projectdummy.png"
import Project from "./project"
import { motion } from "framer-motion"

const animationStages = {
    hidden:{
        opacity:0
    },
    show:{
        opacity:1,
        transition:{
            duration:0.75
        },
    }
}

export default function Projects(){
    const navigate = useNavigate()

    return(
        <motion.div className="projects"
            variants={animationStages}
            initial="hidden"
            animate="show"
        >
            <Container>
                <Row>
                    <Col>
                        <h1 className="projects-title">PROJECTS</h1>
                    </Col>
                </Row>   
                <Project
                    img={DummyProject}
                    title="Project 1"
                    description="project 1 description project 1 description project 1 description
                    project 1 descriptionproject 1 descriptionproject 1 description
                    project 1 descriptionproject 1 descriptionproject 1 description project 1 description
                    project 1 descriptionproject 1 descriptionproject 1 description"
                />
                <hr/>
                <Project
                    img={DummyProject}
                    imgOrder="last"
                    title="Project 2"
                    description="project 1 description project 1 description project 1 description
                    project 1 descriptionproject 1 descriptionproject 1 description
                    project 1 descriptionproject 1 descriptionproject 1 description project 1 description
                    project 1 descriptionproject 1 descriptionproject 1 description"
                />
                <hr/>
                <Project
                    img={DummyProject}
                    title="Project 3"
                    description="project 1 description project 1 description project 1 description
                    project 1 descriptionproject 1 descriptionproject 1 description
                    project 1 descriptionproject 1 descriptionproject 1 description project 1 description
                    project 1 descriptionproject 1 descriptionproject 1 description"
                />      
                <Button
                    className="gobackbutton"
                    variant="outline-light"
                    onClick={()=>{navigate(-1)}}
                >
                    Back
                </Button>
            </Container>
        </motion.div>
    )
}

