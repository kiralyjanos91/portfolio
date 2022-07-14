import React, {useState} from "react"
import SkillIcon from "./skillIcon"
import {Button} from "react-bootstrap"
import "./main.css"
import { Row, Col, Container } from "react-bootstrap"
import {Link} from "react-router-dom"
import { motion } from "framer-motion"
/* Import images */
import html5Icon from "../../images/html5.png"
import css3Icon from "../../images/css3.png"
import javascriptIcon from "../../images/javascript.png"
import reactIcon from "../../images/react.png"
import reduxIcon from "../../images/redux.png"
import bootstrapIcon from "../../images/bootstrap.png"

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

    const [skillName, setSkillName] = useState("")

    return(
        <motion.div className="main"
            variants={animationStages}
            initial="hidden"
            animate="show" 
        >
            <Container>
                <Row>
                    <Col>
                        <div className="welcome-text align-self-center">
                            <h1 className="name">JANOS KIRALY</h1>
                            <Link to="/projects">
                                <Button variant="outline-light" className="gotoprojects-btn">Projects</Button>
                            </Link>
                            <hr/>
                            <h4>About Me:</h4>
                            <p className="short-about">
                                Lorem ipsum dolor sit amenLorem ipsum dolor sit amenLorem ipsum dolor sit amen
                                Lorem ipsum dolor sit amenLorem ipsum dolor sit amenLorem ipsum dolor sit amen
                                Lorem ipsum dolor sit amenLorem ipsum dolor sit amenLorem ipsum dolor sit amen
                            </p>
                            <hr/>
                            <h4>Skills: {skillName}</h4>
                                <Row className="skills-icons">
                                    <SkillIcon 
                                        skill="HTML5"
                                        icon={html5Icon}
                                        setSkillName={setSkillName}
                                    />
                                    <SkillIcon 
                                        skill="CSS3"
                                        icon={css3Icon}
                                        setSkillName={setSkillName}
                                    />
                                    <SkillIcon 
                                        skill="JavaScript"
                                        icon={javascriptIcon}
                                        setSkillName={setSkillName}
                                    />
                                    <SkillIcon 
                                        skill="React"
                                        icon={reactIcon}
                                        setSkillName={setSkillName}
                                    />
                                    <SkillIcon 
                                        skill="Redux"
                                        icon={reduxIcon}
                                        setSkillName={setSkillName}
                                    />
                                    <SkillIcon 
                                        skill="Bootstrap"
                                        icon={bootstrapIcon}
                                        setSkillName={setSkillName}
                                    />                                  
                                </Row>
                            <hr/>
                            <h4>Contact:
                                <a className="mail" href="mailto:name@email.com">kiralyjanos91@gmail.com</a>
                            </h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}