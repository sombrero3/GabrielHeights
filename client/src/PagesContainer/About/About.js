import React from "react";
import "./About.css";

export default function About(props) {

  const SCREEN_CONSTANTS = {
    description: "דרכו של גבריאל בענף הבניה החלה בתור נער בעבודה אצל קבלן. מאז התאהב בעבודות הידיים למינהן. במקביל התחביב הגדול תמיד היה טיפוס וגלישת מצוקים שעם השנים התמקצע גם בהם. אחרי הצבא למד ועבד בתור סוכן ביטוח במשך שש שנים. כשהבין שהוא רוצה לעשות שינוי, החליט לשלב את אהבתו לעבודות כפיים וטיפוס כהתעסקות היום יומית שלו. החיבור היה טבעי ומיידי",
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

