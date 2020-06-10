import Section1 from "views/Section1.jsx";
import Section3 from "views/Section3.jsx";
import Section4 from "views/Section4.jsx";
import Section2 from "views/Section2.jsx";
import Settings from "views/Settings";

var routes = [
  {
    path: "/section1",
    name: "Section 1",
    image: require("./assets/img/grid.svg"),
    component: Section1,
    layout: "/admin",
    id: "sec1",
  },
  {
    path: "/section2",
    name: "Section 2",
    image: require("./assets/img/add-to-list.svg"),
    component: Section2,
    layout: "/admin",
    id: "sec2",
  },

  {
    path: "/section3",
    name: " Section 3",
    image: require("./assets/img/menu3.svg"),
    component: Section3,
    layout: "/admin",
    id: "sec3",
  },

  {
    path: "/section4",
    name: "  Section 4",
    image: require("./assets/img/menu4.svg"),
    component: Section4,
    layout: "/admin",
    id: "sec4",
  },

  {
    path: "/settings",
    name: " Settings",
    image: require("./assets/img/cog.svg"),
    component: Settings,
    layout: "/admin",
    id: "settings",
  },
];
export default routes;
