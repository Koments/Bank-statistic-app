import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { RightSideHeaderStyles } from "./styled-components";

export function RightSideHeader() {
  return (
    <RightSideHeaderStyles>
      <div className="title">
        <h2>Analytics</h2>
        <button>Custom reports</button>
      </div>
      <div className="search">
        <input
          type="search"
          className="search-report"
          placeholder="Search for report"
        />
        <div className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </RightSideHeaderStyles>
  );
}
