import React from 'react'
import './DisplayProjects.css'
import ExpertiseList from '../../../utilities/ExpertiseList';


export default function DisplayProjects(props) {
 
    const mapProjects = (array) => {
        return array.map((project, index) => (
            <div className='display-project-container' key={index}>                    
                <div className='display-project-details-container'>
                    <div className='display-project-title-address'>
                        {project.address}
                    </div>
                    <div className='display-project-description'>
                        {project.description}
                    </div>
                </div>                
                <div className='display-project-img' >
                <div className='display-project-cover'></div>
                    {/* <img src={require('../../../assets/Home/' + project.img)} alt="Failed to download"> */}
                    <img src={project.img} alt="Failed to download">
                    </img>                
                </div>
            </div>
        ))
    }

    const project = ExpertiseList[props.index];
    return (
        <div className='display-projects-container ' id={project.id || ""} >
            <div className='display-projects-title'>                
                {project.title}
            </div>
            <div className='display-projects-subtitle-container'>
            <div className='display-projects-subtitle'>
                {project.subTitle}
            </div>
            </div>
            <div className='display-projects-subtitle-container'>
            <div className='display-projects-sub-subtitle'>
                פרוייקטים שביצענו ב{project.title}
            </div>
            </div>
            <div className='display-projects-list-container'>
                {mapProjects(project.projects)}
            </div>
        </div>
    )

}