import React from "react";
// import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animations";
import "./About.css";

export default function About(props) {

  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeInScreen !== props.id) return;
  //   Animations.animations.fadeInScreen(props.id);
  // };

  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // useEffect(() => {
  //   return () => {
  //     /* UNSUBSCRIBE THE SUBSCRIPTIONS */
  //     fadeInSubscription.unsubscribe();
  //   };
  // }, [fadeInSubscription]);

  const SCREEN_CONSTANTS = {
    description:
      "פה גבריליטק ירשום על עצמו דברים שאמרונרים לקדם מכירה יעני... אם לא פה אז איפה? זה בדיוק המקום לנפח לחרטת ולהכנס ללב ולכיס של אותו לקוח מתעניין שבבטן יש לו בן, איך קוראים לבן? בן של לקוח מתעניין שיהיה בריא... לצערי אני צריך להמשיך לכתוב כי זה עדיין נראה לי מעט יחסית למה שגבריליטק ירשום פה בפסקה המסכנה הזאת שעכשיו מבזבזת לי את הזמן על חירטות טהור שלא היה ולא יהיה כמותו. אני רעב"
    ,
  }

  return (
    <div
      // className="about-container screen-container fade-in"
      className="about-container screen-container"
      id={props.id || ""}
    >
    <div className="about-container-background"></div>
      <div className="about-parent">
        {/* <ScreenHeading title={"אודותינו"} subHeading={"קצת עלינו"} /> */}
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

