import React, { useState, useRef, useMemo, useEffect } from 'react'
import ExpertiseList from '../../utilities/ExpertiseList'
import Animations from '../../utilities/Animations'
import ScrollService from '../../utilities/ScrollService'
import DisplayProjects from './DisplayProjects/DisplayProjects'
import './Expertise.css'

export default function Expertise(props) {

    const [specialtySelcted, setSpecialtySelcted] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    let buttonRefs = useMemo(()=>{return []},[])
    let insideDisplayProjects = useMemo(()=>{return []},[])
    buttonRefs = [useRef(), useRef(), useRef(), useRef(), useRef()]
    insideDisplayProjects = [useRef(), useRef(), useRef(), useRef(), useRef()]
    const outsideDisplayProjects = useRef();

    //---Main Container Fade-In Animation-----//
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    //------------------------//


    useEffect(() => {

        const setProperties = () => {
            //----Set Refferences---// 
            outsideDisplayProjects.current.classList.add("display-projects-container-outside-display")
            for (let i = 0; i < insideDisplayProjects.length; i++) {
                insideDisplayProjects[i].current.classList.add("projects-inside-display")
            }
        }

        const onClick = () => {
            //---Removing Projects Container Fade-In Animations class--//
            outsideDisplayProjects.current.classList.remove("active")
            for (let i = 0; i < insideDisplayProjects.length; i++) {
                insideDisplayProjects[i].current.classList.remove("active")
            }
            //---Adding Projects Container Fade-In Animations class To trigger Animation--//
            setTimeout(() => {
                outsideDisplayProjects.current.classList.add("active")
                for (let i = 0; i < insideDisplayProjects.length; i++) {
                    insideDisplayProjects[i].current.classList.add("active")
                }
            }, 10)
        }

        setProperties();

        //----Determain Which Event Will Trigger The Projects Container Fade-In Animation----// 
        for (let i = 0; i < buttonRefs.length; i++) {
            buttonRefs[i].current.addEventListener("mouseup", onClick);
        }

        return () => {
            for (let i = 0; i < buttonRefs.length; i++) {
                buttonRefs[i].current.removeEventListener("mouseup", onClick);
            }
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            //--Disable Main Container animation--//
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription, insideDisplayProjects, buttonRefs]);

    const mapExpertise = () => {
        return ExpertiseList.map((specialty, index) => (
            (
                <div className={specialtySelcted === index ? 'expertise-specialty-container expertise-specialty-selcted' : 'expertise-specialty-container'}
                    ref={buttonRefs[index]}
                    key={index}
                    onClick={() => {
                        setSpecialtySelcted(index)
                        if (isMenuOpen) { ScrollService.scrollHandler.scrollToExpertise(); }
                        setIsMenuOpen(isMenuOpen && index !== specialtySelcted ? isMenuOpen : !isMenuOpen)
                    }}
                >
                    <div>
                        <img className='expertise-img'
                            src={require('../../assets/Expertise/' + specialty.img)}
                            alt="Failed to download"
                        />
                    </div>
                    <div className='expertise-title'>
                        {specialty.title}
                    </div>
                    <div ref={insideDisplayProjects[index]}>
                        {isMenuOpen ?
                            <div className='specialty-projects-container-inside-display'>
                                {
                                    specialtySelcted === index
                                        ? <DisplayProjects index={specialtySelcted} />
                                        : null
                                }
                            </div>
                            : null
                        }
                    </div>
                </div>
            )
        ));

    }

    return (

        <div id={props.id || ""} className='expertise-main-container fade-in'>
            <div className='container-column-center'>
                <div className='expertise-container'>
                    {mapExpertise()}
                </div>
                <div ref={outsideDisplayProjects}>
                    <DisplayProjects index={specialtySelcted} />
                </div>
                <button
                    className='btn expertise-btn'
                    onClick={() => ScrollService.scrollHandler.scrollToExpertise()}>
                    <span></span>
                    חזרה לתחומי התמחות
                </button>
            </div>
        </div>
    )
}