import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import Tab1 from "./Tab1";
import "./tabs.css";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";
import Tab6 from "./Tab6";
import Tab7 from "./Tab7";

const TabsSection2 = (props) => {
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
                      User
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
                      Product
                    </NavLink>
                  </NavItem>
                </th>
                <th>
                  <NavItem className="navitem-cursor">
                    <NavLink
                      className={classnames({ active: activeTab === "3" })}
                      onClick={() => {
                        toggle("3");
                      }}
                    >
                      Machine
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
                      Shift
                    </NavLink>
                  </NavItem>
                </th>
                <th>
                  <NavItem className="navitem-cursor">
                    <NavLink
                      className={classnames({ active: activeTab === "5" })}
                      onClick={() => {
                        toggle("5");
                      }}
                    >
                      Stoppage Reason
                    </NavLink>
                  </NavItem>
                </th>
                <th>
                  <NavItem className="navitem-cursor">
                    <NavLink
                      className={classnames({ active: activeTab === "6" })}
                      onClick={() => {
                        toggle("6");
                      }}
                    >
                      Sub Stoppage Reason
                    </NavLink>
                  </NavItem>
                </th>
                <th>
                  <NavItem className="navitem-cursor">
                    <NavLink
                      className={classnames({ active: activeTab === "7" })}
                      onClick={() => {
                        toggle("7");
                      }}
                    >
                      Rejection Reason
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
          <Tab1 />
        </TabPane>
        <TabPane tabId="2">
          <Tab2 />
        </TabPane>
        <TabPane tabId="3">
          <Tab3 />
        </TabPane>
        <TabPane tabId="4">
          <Tab4 />
        </TabPane>
        <TabPane tabId="5">
          <Tab5 />
        </TabPane>
        <TabPane tabId="6">
          <Tab6 />
        </TabPane>
        <TabPane tabId="7">
          <Tab7 />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default TabsSection2;
