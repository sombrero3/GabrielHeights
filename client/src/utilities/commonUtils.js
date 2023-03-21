import Home from "../PagesContainer/Home/Home";
import Expertise from "../PagesContainer/Expertise/Expertise";
// import Projects from "../PagesContainer/Projects/Projects";
import About from "../PagesContainer/About/About";
import ContactMe from "../PagesContainer/ContactMe/ContactMe";
import Highlights from "../PagesContainer/Highlights/Highlights";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    screen_tag: "דף בית",
    component: Home,
  },
  {
    screen_name: "Expertise",
    screen_tag: "תחומי התמחות",
    component: Expertise,
  },
  // {
  //   screen_name: "Projects",
  //   screen_tag: "פרוייקטים",
  //   component: Projects,
  // },
  {
    screen_name: "About",
    screen_tag: "אודותינו",
    component: About,
  },
  {
    screen_name: "Highlights",
    screen_tag: "אנקדותות",
    component: Highlights,
  },
  {
    screen_name: "ContactMe",
    screen_tag: "צרו קשר",
    component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};