import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import Tooltip from "./Tooltip/Tooltip";

import "./Sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  render() {
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="sidebar-wrapper" ref={this.sidebar}>
          <Nav>
            {this.props.routes.map((prop, key) => {
              return (
                <li
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                    id={prop.id}
                  >
                    <div className="flexdisp">
                      <img
                        src={prop.image}
                        alt=""
                        className="imageicon"
                        title={prop.name}
                        // onClick={() => this.toggleTooltip(prop.id)}
                      />
                      {/* <p className="nametext">{prop.name}</p> */}
                    </div>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
