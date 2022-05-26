import { ContainerLeftSide } from "../containerLeftSide";
import { ContainerRightSide } from "../containerRightSide";

import { AppStyles } from "./styled-components";

import { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";

function App() {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <AppStyles>
      <div className={"container"}>
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? "Logo" : "Marketscale"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              {menuCollapse ? (
                <ContainerLeftSide status={menuCollapse} />
              ) : (
                <ContainerLeftSide status={menuCollapse} />
              )}
            </Menu>
          </SidebarContent>
        </ProSidebar>
        <ContainerRightSide />
      </div>
    </AppStyles>
  );
}

export default App;
