import { MenuItemType } from '../constants/menu';
import { IMenuItems } from '../interface/menu';

const getMenuItems = (): MenuItemType[] => {
  return [
    {
      key: 'apps-management',
      label: 'React Example',
      isTitle: false,
      icon: 'uil-suitcase',
      children: [
        {
          key: 'optimize',
          label: 'Optimize',
          url: '/optimize',
          parentKey: 'apps-management'
        },
        {
          key: 'immutable',
          label: 'Immutable Example',
          url: '/immutable',
          parentKey: 'apps-management'
        },
        {
          key: 'DebouncingInput',
          label: 'DebouncingInput Example',
          url: '/debouncingInput',
          parentKey: 'apps-management'
        },
        {
          key: 'CarouselExample',
          label: 'CarouselExample',
          url: '/carouselExample',
          parentKey: 'apps-management'
        }
      ]
    }
  ];
};

const findAllParent = (menuItems: IMenuItems[], menuItem: IMenuItems): any => {
  let parents: any = [];
  const parent = findMenuItem(menuItems, menuItem.parentKey);

  if (parent) {
    parents.push(parent.key);
    if (parent.key) parents = [...parents, ...findAllParent(menuItems, parent)];
  }
  return parents;
};

const findMenuItem = (menuItems: IMenuItems[], menuItemKey?: string): IMenuItems | null => {
  if (menuItems && menuItemKey) {
    let result: IMenuItems | null = null;
    menuItems.forEach((menuItem: IMenuItems) => {
      if (menuItem.key === menuItemKey) {
        result = menuItem;
        return;
      }
      const menuItemChild = findMenuItem(menuItem.children, menuItemKey);
      if (menuItemChild) result = menuItemChild;
    });
    return result;
  }
  return null;
};

export { getMenuItems, findAllParent, findMenuItem };
