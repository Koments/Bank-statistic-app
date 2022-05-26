export type MenuItems = {
  title: string;
  firstLink: string;
  secondLink: string;
  icon: any;
};

export interface MenuListProps {
  menuElements: MenuItems[];
}
