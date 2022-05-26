export type Company = {
  title: string;
  icon: any;
  color: string;
};

export interface CompanyProps {
  company: Company[];
  display: Boolean;
}