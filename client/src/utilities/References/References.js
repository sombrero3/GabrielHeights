import React from "react";
import whatsapp from '../../assets/Home/whatsapp.png'
import phonecall from '../../assets/Home/phonecall.png'
import facebook from '../../assets/Home/facebook.png'
import email from '../../assets/Home/email.png'
import './References.css'
export default function References(){

    return (
        <div className='references-container'>
             <a href='#ContactMe'>
              <i className='email-icon'>
                <img src={email} alt="phone call icon" />
              </i>
            </a>
            <a href='https://www.facebook.com/carmel.hershtik/'>
              <i className='facebook-icon'>
                <img src={facebook} alt="facebook icon" />
              </i>
            </a>
            <a href="https://wa.me/+972502006233">
              <i className='whatsapp-icon'>
                <img src={whatsapp} alt="whatsapp icon" />
              </i>
            </a>
            <a href='tel:+972502006233'>
              <i className='phonecall-icon'>
                <img src={phonecall} alt="phone call icon" />
              </i>
            </a>
        </div>
    )
}