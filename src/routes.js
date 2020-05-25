import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";

var routes = [
  {
    path: "/user-page",
    name: "Section 1",
    icon: "nc-icon nc-layout-11",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Section 2",
    icon: "nc-icon nc-tile-56",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/notifications",
    name: "Section 3",
    icon: "nc-icon nc-box-2",
    component: Notifications,
    layout: "/admin",
  },

  {
    path: "/maps",
    name: "Section 4",
    icon: "nc-icon nc-single-copy-04",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin",
  },
];
export default routes;
