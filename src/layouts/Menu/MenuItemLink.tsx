import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { SubMenus } from './types';

const MenuItemLink = ({ item, className }: SubMenus) => {
  let location = useLocation();
  return (
    <Link
      to={{ pathname: item.url }}
      target={item.target}
      className={classNames('side-nav-link-ref', 'side-sub-nav-link', className, {
        active: location && location.pathname === item.url
      })}
      data-menu-key={item.key}>
      {item.icon && <i className={item.icon}></i>}
      {item.badge && (
        <span
          className={classNames(
            'badge',
            'bg-' + item.badge.variant,
            'rounded',
            'font-10',
            'float-end',
            {
              'text-dark': item.badge.variant === 'light',
              'text-light': item.badge.variant === 'dark' || item.badge.variant === 'secondary'
            }
          )}>
          {item.badge.text}
        </span>
      )}
      <span> {item.label} </span>
    </Link>
  );
};

export default MenuItemLink;
