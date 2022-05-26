import { Credits } from "../../molecules/credits";
import { LocalBanksSpread } from "../../molecules/localBanksSpread";
import { StatisticsStyles } from "./styled-components";
import { SignedContracts } from "../../molecules/signedContracts";
export function Statistics() {
  return (
    <StatisticsStyles>
      <div className="credits">
        <Credits />
      </div>
      <div className="local-banks-spread1">
        <SignedContracts />
      </div>
      <div className="local-banks-spread">
        <LocalBanksSpread />
      </div>
    </StatisticsStyles>
  );
}
