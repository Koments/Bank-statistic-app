import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Assigned } from "./styled-components";
import { AccountBtnList } from "./types";

export function AccountElements({ accountBtn }: AccountBtnList) {
  return (
    <Assigned>
      <div className="burder-section">ACCOUNT</div>
      <div className="account-items-container">
        {accountBtn.map((item, index) => (
          <div key={index}>
            <div>
              <FontAwesomeIcon icon={item.icon} className="setting-icon" />
              <div className="setting-title">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </Assigned>
  );
}
