export type GrowthInfo = {
  title: string;
  total: string;
  pay: number[];
};
export interface GrowthProps {
  dataGrowth: GrowthInfo[];
}
