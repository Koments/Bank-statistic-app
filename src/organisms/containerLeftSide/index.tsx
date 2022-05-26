import {
  companyList,
  menuListItems,
  accountListItems,
} from "../../store/store";

import { Teams } from "../../molecules/teams";
import { Setting } from "../../molecules/setting";
import { MenuListItems } from "../../molecules/menuListItems";
import { AccountElements } from "../../molecules/accountElements";

import { BurgerComponents } from "./styled-components";

import { Status } from "./types";

export function ContainerLeftSide({ status }: Status) {
  const dataCompanyBtnList = companyList as any;
  const dataMenuBtnList = menuListItems as any;
  const dataAccountBtnList = accountListItems as any;

  return (
    <BurgerComponents>
      <div className={"top-elements"}>
        <div>
          <div className="burder-section">TEAMS</div>
          <Teams company={(dataCompanyBtnList)} display={status} />
        </div>
        <div>
          <div className="burder-section">MENU</div>
          {status ? "" : <MenuListItems menuElements={dataMenuBtnList} />}
        </div>
        <div>
          <Setting />
        </div>
      </div>
      <div>
        {status ? "" : <AccountElements accountBtn={dataAccountBtnList} />}
      </div>
    </BurgerComponents>
  );
}
