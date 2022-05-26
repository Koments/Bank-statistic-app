

import { Statistics } from "../statistics";
import { CompanieInfo } from "../companieInfo";
import { RightSideHeader } from "../../molecules/rightSideHeader";
import { RightSideContainer } from "./styled-components";

export function ContainerRightSide() {
  return (
    <RightSideContainer>
      <div className={"header-right-side"}>
       <RightSideHeader />
      </div>
      <div className={"main-elements"}>
        <div className={"statistics"}>
          <Statistics />
        </div>
        <div className={"companie-info"}>
          <CompanieInfo />
        </div>
      </div>
    </RightSideContainer>
  );
}
