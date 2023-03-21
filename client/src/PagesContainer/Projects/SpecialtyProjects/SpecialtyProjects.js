import React from 'react';
import './SpecialtyProjects.css'

export default function ExpertyProjects(props) {
    

    const mapExpertyProjects = (array) => {
        return array.map((project, index) => (
            <div className='specialty-project-container' key={index}>
                <div className='specialty-project-details'>
                    <div className='projects-address'>
                        {project.address}
                    </div>
                    <div className='specialty-project-description'>
                        {project.description}
                    </div>
                </div>
                <div className='specialty-project-img' >
                    <img src={require('../../../assets/Home/' + project.img)} alt="Failed to download" />
                </div>
            </div>
        ))
    }

    return (
        <div className='specialty-projects-container' id={props.id || ""} >
            <div className='specialty-projects-title'>
                {props.title}
            </div>
            <div className='specialty-projects-list-container'>
                {mapExpertyProjects(props.projects)}
            </div>
        </div>
    )

}