import React, { useState } from "react";
import SkillIcon from "./skillIcon";
import { Button } from "react-bootstrap";
import "./main.css";
import { Row , Col , Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { skillsData } from "./skillsData";

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

export default function Main(){

    const [ skillName , setSkillName ] = useState("")
    const navigate = useNavigate()

    const skillsList = skillsData.map((skill , index) => {
        return (
            <SkillIcon 
                key = { index }
                skill = { skill.name }
                icon = { skill.icon }
                setSkillName = { setSkillName }
            />
        )
    })

    return(
        <motion.div className="main"
            variants={animationStages}
            initial="hidden"
            animate="show" 
        >
            <Container
                className = "main-container"
            >
                <Row
                    className = "name-row"
                >
                    <Col
                        className = "name-col"
                    >
                        <h1 className="name">JANOS KIRALY</h1>
                    </Col>
                    <Col
                        className = "dev-col"
                    >
                        <h3 className = "dev">/Frontend Developer/</h3>
                    </Col>
                </Row>
                    <Row className="main-top-buttons">
                        <Col md="3">
                            <Button onClick={()=>{navigate("/projects")}} variant="outline-light">Projects</Button>                          
                        </Col>
                        <Col md="3">
                            <Button variant="outline-light" className="resume-button" href="https://janoskiralydev.s3.amazonaws.com/Janos_Kiraly_Resume.pdf" target="_blank">Resume</Button>                          
                        </Col>
                        <Col md="3">
                            <Button href="https://www.linkedin.com/in/j%C3%A1nos-kir%C3%A1ly-7219b01b2/" target="_blank" variant="outline-light">LinkedIn</Button>                          
                        </Col>
                        <Col md="3">
                            <Button href="https://github.com/kiralyjanos91" target="_blank" variant="outline-light">GitHub</Button>                          
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <p className="short-about">
                            I am a frontend developer with a designer's eye, focused on solving problems. I have over 2 years of hands-on experience coding websites and web applications primarily using HTML, CSS, JavaScript and React. I focus on conceptualizing ideas, simplifying code, and creating enjoyable experiences. 
                            Continuous learning is truly a passion of mine and I’m always taking online courses and tutorials to keep up with new technologies, and industry trends.
                        </p>
                        <hr/>
                        <h4>Skills: {skillName}</h4>
                    </Row>
                    <Row className="skills-icons">
                        { skillsList }                                
                    </Row>
                    <hr/>
                    <Row>
                        <h4>Contact:</h4>
                        <a className="mail" href="mailto:name@email.com">kiralyjanos91@gmail.com</a>
                    </Row>
            </Container>
        </motion.div>
    )
}