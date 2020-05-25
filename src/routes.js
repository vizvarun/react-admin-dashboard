import Section1 from "views/Section1.jsx";
import Section3 from "views/Section3.jsx";
import Icons from "views/Icons.jsx";
import Section4 from "views/Section4.jsx";
import Section2 from "views/Section2.jsx";

var routes = [
  {
    path: "/section1",
    name: "Section 1",
    icon: "nc-icon nc-layout-11",
    component: Section1,
    layout: "/admin",
  },
  {
    path: "/section2",
    name: "Section 2",
    icon: "nc-icon nc-tile-56",
    component: Section2,
    layout: "/admin",
  },

  {
    path: "/section3",
    name: "Section 3",
    icon: "nc-icon nc-box-2",
    component: Section3,
    layout: "/admin",
  },

  {
    path: "/section4",
    name: "Section 4",
    icon: "nc-icon nc-single-copy-04",
    component: Section4,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
];
export default routes;
