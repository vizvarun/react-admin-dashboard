import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";
import Tab1 from "./Tab1";
import './tabs.css';

const TabsSection2 = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="tabslist">
      <Nav tabs>
        <NavItem className="tabitem">
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            User
          </NavLink>
        </NavItem>
        <NavItem className="tabitem">
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Product
          </NavLink>
        </NavItem>
        <NavItem className="tabitem">
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Machine
          </NavLink>
        </NavItem>
        <NavItem className="tabitem">
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            Shift
          </NavLink>
        </NavItem>
        <NavItem className="tabitem">
          <NavLink
            className={classnames({ active: activeTab === "5" })}
            onClick={() => {
              toggle("5");
            }}
          >
            Stoppage Reason
          </NavLink>
        </NavItem>
        <NavItem className="tabitem">
          <NavLink
            className={classnames({ active: activeTab === "6" })}
            onClick={() => {
              toggle("6");
            }}
          >
            Sub Stoppage Reason
          </NavLink>
        </NavItem>
        <NavItem className="tabitem">
          <NavLink
            className={classnames({ active: activeTab === "7" })}
            onClick={() => {
              toggle("7");
            }}
          >
            Rejection Reason
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Tab1 />
        </TabPane>
        <TabPane tabId="2">
          <div>
            <h4>Content 2</h4>
          </div>
        </TabPane>
        <TabPane tabId="3">
          <div>
            <h4>Content 3</h4>
          </div>
        </TabPane>
        <TabPane tabId="4">
          <div>
            <h4>Content 4</h4>
          </div>
        </TabPane>
        <TabPane tabId="5">
          <div>
            <h4>Content 5</h4>
          </div>
        </TabPane>
        <TabPane tabId="6">
          <div>
            <h4>Content 6</h4>
          </div>
        </TabPane>
        <TabPane tabId="7">
          <div>
            <h4>Content 7</h4>
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default TabsSection2;
