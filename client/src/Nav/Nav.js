import React, { useState, useEffect, useCallback } from "react";
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from "../utilities/commonUtils";
import ScrollService from "../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from 'underscore'
import "./Nav.css";
import References from "../utilities/References/References";

export default function Nav() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);
  const [burgerIsClicked, setBurgerIsClicked] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscription =
    ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => (
      Screen.screen_name !== 'Highlights'
        &&
        <div
          key={Screen.screen_name}
          className={getHeaderOptionsClasses(i)}
          onClick={() => switchScreen(i, Screen)}
        >
          <span>{Screen.screen_tag}</span>
        </div>
    ));
  };

  const getHeaderOptionsClasses = (index) => {
    let classes = "header-option ";
    if (index < TOTAL_SCREENS.length) classes += "header-option-seperator ";

    if (selectedScreen === index) classes += "selected-header-option ";

    return classes;
  };

  ///----nav options onClick----///
  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);

    setShowHeaderOptions(false);
    setBurgerIsClicked(false);
  };

  

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight) / 2
    );
  }

  const selectCurrentHeaderOption = useCallback(() => {
    const home = document.querySelector('#Home');
    if (isInViewport(home)) {
      if (selectedScreen !== 0) {
        setSelectedScreen(0);
        updateCurrentScreen(0)
      }
      return;
    }
    const expertise = document.querySelector('#Expertise');
    if (isInViewport(expertise)) {
      if (selectedScreen !== 1) {
        setSelectedScreen(1);
        updateCurrentScreen(1)
      }
      return;
    }
    const about = document.querySelector('#About');
    if (isInViewport(about)) {
      if (selectedScreen !== 2) {
        setSelectedScreen(2);
        updateCurrentScreen(2)
      }
      return;
    }
    const contactMe = document.querySelector('#ContactMe');
    if (isInViewport(contactMe)) {
      if (selectedScreen !== 4) {
        setSelectedScreen(4);
        updateCurrentScreen(4)
      }
      return;
    }
  },[selectedScreen]);

  document.addEventListener('scroll', _.throttle(selectCurrentHeaderOption, 1000, { trailing: true }), {
    passive: true
  });

  useEffect(() => {
    let lastScrollTop = 0,
      navbar = document.getElementById('Header');

    window.addEventListener('scroll', function () {
      var scrollTop = this.window.pageXOffset || this.document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = '-80px';
      }
      else {
        navbar.style.top = '0';
      }
      lastScrollTop = scrollTop;
    })

    return () => {
      currentScreenSubscription.unsubscribe();
    };
  },[currentScreenSubscription]);

  // useEffect(() => {
    
  // }, );
  return (
    <div
      id='Header'
      className="header-container"
      onClick={() => {
        setShowHeaderOptions(!showHeaderOptions);
        setBurgerIsClicked(!burgerIsClicked)
      }}
    >
      <div className="header-parent">

        <div
          className="header-hamburger"
          onClick={() => {
            setShowHeaderOptions(!showHeaderOptions);
            setBurgerIsClicked(!burgerIsClicked)
          }}
        >
          <FontAwesomeIcon className={burgerIsClicked ? "header-hamburger-bars-active" : "header-hamburger-bars"} icon={faBars} />
        </div>
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          {getHeaderOptions()}
        </div>
        <div className="header-logo-container">
          <References />
          <div className="header-logo">
          <span className="header-logo-title">גבריאל</span>
          <span className="header-logo-sub">עבודות גובה</span>
          </div>
        </div>
      </div>
    </div>
  );
}