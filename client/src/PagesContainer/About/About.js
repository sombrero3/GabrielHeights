import React from "react";
import "./About.css";

export default function About(props) {

  const SCREEN_CONSTANTS = {
    description:
      "פה גבריליטק ירשום על עצמו דברים שאמורים לקדם מכירה יעני... אם לא פה אז איפה? זה בדיוק המקום לנפח לחרטת ולהכנס ללב ולכיס של אותו לקוח מתעניין שבבטן יש לו בן, איך קוראים לבן? בן של לקוח מתעניין שיהיה בריא... לצערי אני צריך להמשיך לכתוב כי זה עדיין נראה לי מעט יחסית למה שגבריליטק ירשום פה בפסקה המסכנה הזאת שעכשיו מבזבזת לי את הזמן על חירטות טהור שלא היה ולא יהיה כמותו. אני רעב"
    ,
  }

  return (
    <div      
      className="about-container screen-container"
      id={props.id || ""}
    >
    <div className="about-container-background"></div>
      <div className="about-parent">
        <div className="about-card">
          <div className="about-details">
            <span className="about-description">
              {SCREEN_CONSTANTS.description}
            </span>
          </div>
        </div>        
      </div>
    </div>
  );
}

