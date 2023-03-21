import React from "react";
import Profile from "./Profile/Profile";
import './Home.css'

function Home(props) {
    
    return (
        <div className="home" id={props.id || ""}>            
            <div className="home-container">
                <Profile />
            </div>        
        </div>
    )
}

export default Home