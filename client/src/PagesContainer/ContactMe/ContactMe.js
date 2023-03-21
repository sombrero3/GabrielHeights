import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import References from "../../utilities/References/References";
import imgBack from "../../../src/assets/ContactMe/mailz.jpeg";
import load1 from "../../../src/assets/ContactMe/load2.gif";
import "./ContactMe.css";

export default function ContactMe(props) {
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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("שלחו לנו מייל");
    const [bool, setBool] = useState(false);

    const handleName = (e) => { setName(e.target.value) }

    const handleEmail = (e) => { setEmail(e.target.value) }

    const handleMessage = (e) => { setMessage(e.target.value) }

    const submitForm = async (e) => {
        e.preventDefault();        
        try {
            let data = {
                name,
                email,
                message,
            };
            setBool(true);
            const res = await axios.post(`/contact`, data);
            if (name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg);
                toast.error(res.data.msg);
                setBool(false);
            } else if (res.status === 200) {
                setBanner(res.data.msg);
                toast.success(res.data.msg);

                setBool(false);

                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (error) {
            console.log(error);
        }       
    };

    return (
        <div className="contact-main-container fade-in" id={props.id || ""}>
            <div className="contact-central-form">
                <div className="contact-details">
                    <h2 className="contact-title">
                        נשמח לשמוע מכם
                    </h2>{" "}
                    <div className="contact-icons-row">
                        <References />
                    </div>
                    <div className="contact-img-back">
                    <h4>atg.height@gmail.com</h4>
                        <div className="contact-phone">
                            <h4>:אפשר גם בטלפון</h4>
                            <h4>055-2667890</h4>
                        </div>
                        <div>
                            <img src={imgBack} alt="Transparent icons background" />                                                                                     
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor="name">שם</label>
                        <input type="text" onChange={handleName} value={name} />
                        <label htmlFor="email">כתובת המייל שלכם</label>
                        <input type="email" onChange={handleEmail} value={email} />
                        <label htmlFor="message">גוף ההודעה</label>
                        <textarea type="text" onChange={handleMessage} value={message} />
                        <div className="contact-btn-container">
                            <button type="submit" className="btn send-btn">
                            <span></span>
                                שלח מייל{"   "}
                                {bool ? (
                                    <b className="load">
                                        <img src={load1} alt="Sending Mail gif" />
                                    </b>
                                ) : (
                                    ""
                                )}
                            </button>
                        </div>
                    </form>
                </div>
                {/* <BtnScrollUp /> */}
            </div>
        </div>
    );
}