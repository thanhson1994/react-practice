interface IMenuItems {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: string;
  url?: string;
  badge?: any;
  children?: any;
  parentKey?: string;
  // eslint-disable-next-line no-undef
  target?: React.HTMLAttributeAnchorTarget;
}

export type { IMenuItems };
