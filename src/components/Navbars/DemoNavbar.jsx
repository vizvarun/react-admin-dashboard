import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Modal,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import "./DemoNavbar.css";
import Tooltip from "../Sidebar/Tooltip/Tooltip";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent",
    };
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = React.createRef();
  }

  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent",
      });
    } else {
      this.setState({
        color: "dark",
      });
    }
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  }
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "dark",
      });
    } else {
      this.setState({
        color: "transparent",
      });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      this.sidebarToggle.current.classList.toggle("toggled");
    }
  }
  render() {
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        color={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "dark"
            : this.state.color
        }
        expand="lg"
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
              (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref={this.sidebarToggle}
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="">
              <img
                src={require("assets/img/logo.png")}
                alt="logo"
                className="navbrand"
              />
            </NavbarBrand>
            {/* <p>
              Here is a{" "}
              <Tooltip
                message={"Hello, I am a super cool tooltip"}
                position={"right"}
              >
                tooltip
              </Tooltip>{" "}
              on right.
            </p>   */}
          </div>
          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="justify-content-end"
          >
            <form className="textbox">
              <InputGroup className="no-border textInp">
                <Input placeholder=" Search" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <img src={require("assets/img/search.svg")} alt="" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </form>
            <Nav navbar>
              <NavItem>
                <Link to="#" className="nav-link btn-rotate">
                  <img
                    src={require("assets/img/bell.svg")}
                    className="ml-4"
                    alt=""
                  />
                  <p>
                    <span className="d-lg-none d-md-block">Notifications</span>
                  </p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="#" className="nav-link btn-rotate">
                  <img
                    src={require("assets/img/account.svg")}
                    className="ml-3 mr-2"
                    alt=""
                  />
                  <p>
                    <span className="d-lg-none d-md-block">Account</span>
                  </p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/login" className="nav-link btn-rotate">
                  <button className="logout-btn">Logout</button>
                  </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
