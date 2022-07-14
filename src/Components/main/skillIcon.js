import React from "react"
import {Col} from "react-bootstrap"

export default function SkillIcon({skill,icon,setSkillName}){
    
    return(
        <Col xs={2} sm={1}>
            <img
                src={icon}
                className="img-fluid" 
                alt={`${skill}-icon`}
                onMouseEnter={()=> setSkillName(skill)} 
            />
        </Col>
    )
}