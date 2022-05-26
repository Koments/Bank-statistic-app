import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { Settings } from "./styled-components";

export function Setting() {
  return (
      <Settings>
        <FontAwesomeIcon icon={faGear} className="setting-icon" />
        <div className="setting-title">Setting</div>
      </Settings>
  );
}
