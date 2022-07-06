import React from "react"
import {useNavigate} from "react-router-dom"
import Button from "react-bootstrap/Button"

export default function Projects(){
    const navigate = useNavigate()
    return(
        <div className="projects">
            <h1>Itt lesz a portfólió</h1>
            <Button
                onClick={()=>{navigate(-1)}}
            >
                Back
            </Button>
        </div>
    )
}

