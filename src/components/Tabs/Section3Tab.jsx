import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import "./tabs.css";

import ProductionTab from "./ProductionTab";
import DowntimeTab from "./DowntimeTab";

const Section3Tab = (props) => {
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
                      Production
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
                      Downtime
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
          <ProductionTab />
        </TabPane>
        <TabPane tabId="2">
          <DowntimeTab />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Section3Tab;
