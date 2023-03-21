import React from 'react'
import ScrollService from '../../../utilities/ScrollService'
import './BtnScrollUp.css'

export default function BtnScrollUp() {
    return (
        <div className="scroll-container">
            <button className="btn-scroll-up" onClick={()=>ScrollService.scrollHandler.scrollToHome()}>🔝</button>
        </div>
    )

}