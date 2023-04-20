import React from 'react'
import ScrollService from '../../../utilities/ScrollService'
import phonecall from '../../../assets/Home/phonecall.png'
import './Profile.css'

function Profile() {
    return (
        <div className='profile-main-container'>
            <div className='profile-main-background-img'></div>
            <div className='profile-main-background-cover'></div>
            <div className='profile-container'>
                <div className='profile-parent'>
                    <div className='profile-details'>
                        <div className='profile-details-background'></div>
                        {/* <div className="profile-call-us">
                            <span>
                                צלצלו אלינו <span className='profile-phone-number'>050-2006233</span>
                            </span>
                        </div> */}
                        <div className='profile-main-text'>
                            <span>
                                <h1>
                                    גבריאל עבודות גובה
                                </h1>
                            </span>
                        </div>
                        <div className='profile-slogen'>
                            <span >
                                מתמחים באיטום ושיקום מבנים בגובה על ידי סנפלינג, במות הרמה, ופיגומים
                            </span>
                        </div>
                        <div className='profile-buttons-row'>                            
                            <div className='profile-options'>
                                <button
                                    className='btn profile-mail-btn'
                                    onClick={() => ScrollService.scrollHandler.scrollToContactMe()}>
                                    <span></span>
                                    {""}
                                    שליחת מייל{" "}                                    
                                </button>
                            </div>
                            <div className='profile-options'>
                                <button
                                    className='btn profile-call-btn'
                                    onClick={() => ScrollService.scrollHandler.scrollToContactMe()}>
                                    <span></span>
                                    {""}
                                    050-2006233{" "}
                                    <img className='profile-phone-logo' src={phonecall} alt="phone call icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile