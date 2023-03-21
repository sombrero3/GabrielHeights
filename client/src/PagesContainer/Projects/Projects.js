import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Animations from '../../utilities/Animations'
import ScrollService from '../../utilities/ScrollService'
import ExpertiseList from '../../utilities/ExpertiseList'
import SpecialtyProjects from './SpecialtyProjects/SpecialtyProjects'
import './Projects.css'

export default function Projects(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);
 
    const mapSpecialtyProjects = () =>{
        return ExpertiseList.map((experty)=>(
            <SpecialtyProjects 
                key={experty.title}
                id={experty.title}
                title={experty.title}
                subTitle={experty.subTitle}
                projects={experty.projects}
                />
        ));
    }

    return (
        <div className='projects-main-container fade-in' id={props.id || ""} >
                <ScreenHeading title={"פרוייקטים"} subHeading={"התרשמו מעבודות אלו שביצענו"} />
            <div className='projects-container'>
            <div className='projects-bulding-img'></div>
                {mapSpecialtyProjects()}
            </div>
        </div>
    )
}