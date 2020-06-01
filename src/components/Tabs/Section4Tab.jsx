import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import "./tabs.css";

import ProductionTab from "./ProductionTab";
import DowntimeTab from "./DowntimeTab";
import Section4SubTab1 from "./Section4SubTab1";

const Section4Tab = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs style={{ border: "none" }}>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>
                  <NavItem className="navitem-cursor">
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        // setLoading(true);
                        toggle("1");
                        // setLoading(false);
                      }}
                    >
                      Usage
                    </NavLink>
                  </NavItem>
                </th>
                <th>
                  {" "}
                  <NavItem className="navitem-cursor">
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Value Addition Report
                    </NavLink>
                  </NavItem>
                </th>
                <th>
                  {" "}
                  <NavItem className="navitem-cursor">
                    <NavLink
                      className={classnames({ active: activeTab === "3" })}
                      onClick={() => {
                        toggle("3");
                      }}
                    >
                      Machine Report
                    </NavLink>
                  </NavItem>
                </th>
                <th>
                  {" "}
                  <NavItem className="navitem-cursor">
                    <NavLink
                      className={classnames({ active: activeTab === "4" })}
                      onClick={() => {
                        toggle("4");
                      }}
                    >
                      Product Report
                    </NavLink>
                  </NavItem>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Section4SubTab1 />
        </TabPane>
        <TabPane tabId="2">
          <DowntimeTab />
        </TabPane>
        <TabPane tabId="3">
          <DowntimeTab />
        </TabPane>
        <TabPane tabId="4">
          <DowntimeTab />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Section4Tab;
