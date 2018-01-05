export interface NavBadge {
  variant: string;
  text: string;
  className?: string;
}

export interface NavWrapper {
  element: string;
  attributes: {
    [key: string]: string;
  };
}

export enum NavItemType {
  NAV_REGULAR,
  NAV_DIVIDER,
  NAV_TITLE
}

export interface NavItem {
  type?: NavItemType;
  name: string;
  url: string;
  icon: string;
  badge?: NavBadge;
  wrapper?: NavWrapper;
  'class'?: string;
  variant?: string;
  children?: NavItem[];
}

export interface Nav {
  items: NavItem[];
}

export interface NavClasses {
  item?: string;
  icon?: string;
  link?: string;
}