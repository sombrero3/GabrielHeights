import React, { useEffect } from 'react'
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

import './Highlights.css'

export default function Highlights(props) {

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


    const SCREEN_CONSTANTS = {
        bullets: [
            ".אנשים טובים מעל הדרך",
            ".חושבים הגינות, מספקים אמינות",
            ".כל האישורים הנדרשים לעבודות גובה",
            ".משתמשים בציוד המתקדם ביותר בענף",
        ],
    }

    const renderHighlight = () => {
        return SCREEN_CONSTANTS.bullets.map((value, i) => (
            <div className="highlight" key={i}>
                <span>{value}</span>
                <div className="highlight-blob"></div>
            </div>
        ));
    };
    return (
        <div className='highlights-main-container fade-in' id={props.id || ""}>
            <div className="highlights-img"></div>
                <div className="highlights-container">
                    {renderHighlight()}
                </div>
        </div>
    )
}