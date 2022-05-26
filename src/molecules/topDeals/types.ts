export type DataDeals = {
  dealName: string;
  status: string;
  customer: string;
  estate: string;
  marketValue: string;
};

export interface DataDealsProps {
  dataDeals: DataDeals[];
}
