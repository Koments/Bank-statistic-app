import { Brifings } from "../../molecules/brifings/app";
import { BankActivity } from "../../molecules/bankActivity";
import { TopEstate } from "../../molecules/topEstate";
import { ClientGrowth } from "../../molecules/clientGrowth";
import { FinanceGrowth } from "../../molecules/financeGrowth";
import { TopDeals } from "../../molecules/topDeals";

import { CompanieInfoStyles } from "./styled-components";

import {
  dataBankInfo,
  dataGrowthList,
  dataClientGrowthList,
  dataFinanceGrowthList,
  dataDealsList,
} from "../../store/store";

export function CompanieInfo() {
  const dataBankProcess = dataBankInfo;
  const dataGrowth = dataGrowthList as any;
  const dataClientGrowth = dataClientGrowthList as any;
  const dataFinanceGrowth = dataFinanceGrowthList as any;
  const dataDeals = dataDealsList as any;
  return (
    <CompanieInfoStyles>
      <div className="companie-info-container">
        <div className="companie-info-left-side">
          <div className="briefings">
            <Brifings />
          </div>
          <div className="bank-activity">
            <BankActivity dataBank={dataBankProcess} />
          </div>
        </div>
        <div className="companie-info-right-side">
          <div className="top-estate">
            <TopEstate dataGrowth={dataGrowth} />
          </div>
          <div className="growth">
            <div className="growth-card">
              <ClientGrowth dataClientGrowth={dataClientGrowth} />
            </div>
            <div className="growth-card">
              <FinanceGrowth dataFinanceGrowth={dataFinanceGrowth} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <TopDeals dataDeals={dataDeals} />
      </div>
    </CompanieInfoStyles>
  );
}
