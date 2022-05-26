import { TopDealsStyles } from "./styled-components";
import { DataDealsProps } from "./types";

export function TopDeals({ dataDeals }: DataDealsProps) {
  return (
    <TopDealsStyles>
      <div className="title">Top Deals</div>
      <div className="top-deals-container">
        <div className="deal-name">Deal name</div>
        <div className="status">Status</div>
        <div className="customer">Customer</div>
        <div className="estate">Estate</div>
        <div className="market-value">Market value</div>
      </div>

      {dataDeals.map((deal, index) => (
        <div className="top-deals-sort-sections" key={index}>
          <div className="deal-name">{deal.dealName}</div>
          <div className="status">{deal.status}</div>
          <div className="customer">{deal.customer}</div>
          <div className="estate">{deal.estate}</div>
          <div className="market-value">{deal.marketValue}</div>
        </div>
      ))}
    </TopDealsStyles>
  );
}
