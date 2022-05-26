import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import { ButtonList } from "./styled-components";
import { CompanyProps } from "./types";

export function Teams({ company, display }: CompanyProps) {
  console.log(display);
  return (
    <ButtonList>
      <div>
        {company.map((item, key) => (
          <div key={key} className={`bank-container`}>
            <div className={`icon-container`}>
              <FontAwesomeIcon
                icon={faLock}
                style={{ color: `${item.color}` }}
              />
            </div>
            {display ? (
              ""
            ) : (
              <div className={`btn-container`}>
                <button>{item.title}</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </ButtonList>
  );
}
