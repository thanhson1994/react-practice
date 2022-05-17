// @flow
import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

// actions
// import { showRightSidebar, changeSidebarType } from '../redux/actions';

// components
// import LanguageDropdown from '../components/LanguageDropdown';
// import NotificationDropdown from '../components/NotificationDropdown';
// import ProfileDropdown from '../components/ProfileDropdown';
// import SearchDropdown from '../components/SearchDropdown';
// import TopbarSearch from '../components/TopbarSearch';
// import AppsDropdown from '../components/AppsDropdown/';

// images
// import profilePic from '../assets/images/users/avatar-1.jpg';
import logoSmDark from '../assets/images/logo_sm_dark.png';
import logoSmLight from '../assets/images/logo_sm.png';
import logo from '../assets/images/logo-light.png';

//constants
// import * as layoutConstants from '../constants/layout';

// get the notifications
// const Notifications = [
//   {
//     id: 1,
//     text: 'Caleb Flakelar commented on Admin',
//     subText: '1 min ago',
//     icon: 'mdi mdi-comment-account-outline',
//     bgColor: 'primary'
//   },
//   {
//     id: 2,
//     text: 'New user registered.',
//     subText: '5 min ago',
//     icon: 'mdi mdi-account-plus',
//     bgColor: 'info'
//   },
//   {
//     id: 3,
//     text: 'Cristina Pride',
//     subText: 'Hi, How are you? What about our next meeting',
//     icon: 'mdi mdi-comment-account-outline',
//     bgColor: 'success'
//   },
//   {
//     id: 4,
//     text: 'Caleb Flakelar commented on Admin',
//     subText: '4 days ago',
//     icon: 'mdi mdi-comment-account-outline',
//     bgColor: 'danger'
//   },
//   {
//     id: 5,
//     text: 'New user registered.',
//     subText: '5 min ago',
//     icon: 'mdi mdi-account-plus',
//     bgColor: 'info'
//   },
//   {
//     id: 6,
//     text: 'Cristina Pride',
//     subText: 'Hi, How are you? What about our next meeting',
//     icon: 'mdi mdi-comment-account-outline',
//     bgColor: 'success'
//   },
//   {
//     id: 7,
//     text: 'Carlos Crouch liked Admin',
//     subText: '13 days ago',
//     icon: 'mdi mdi-heart',
//     bgColor: 'info'
//   }
// ];

// get the profilemenu
// const ProfileMenus = [
//   {
//     label: 'My Account',
//     icon: 'mdi mdi-account-circle',
//     redirectTo: '#'
//   },
//   {
//     label: 'Settings',
//     icon: 'mdi mdi-account-edit',
//     redirectTo: '#'
//   },
//   {
//     label: 'Support',
//     icon: 'mdi mdi-lifebuoy',
//     redirectTo: '#'
//   },
//   {
//     label: 'Lock Screen',
//     icon: 'mdi mdi-lock-outline',
//     redirectTo: '/account/lock-screen'
//   },
//   {
//     label: 'Logout',
//     icon: 'mdi mdi-logout',
//     redirectTo: '/account/logout'
//   }
// ];

type TopbarProps = {
  hideLogo?: boolean;
  navCssClasses?: string;
  openLeftMenuCallBack?: () => void;
  topbarDark?: boolean;
};

const Topbar = ({ hideLogo, navCssClasses, openLeftMenuCallBack, topbarDark }: TopbarProps) => {
  //   const dispatch = useDispatch();

  //   const [isopen, setIsopen] = useState(false);

  const navbarCssClasses = navCssClasses || '';
  const containerCssClasses = !hideLogo ? 'container-fluid' : '';

  //
  /**
   * Toggle the leftmenu when having mobile screen
   */
  const handleLeftMenuCallBack = () => {
    // setIsopen((prevState: any) => !prevState);
    if (openLeftMenuCallBack) openLeftMenuCallBack();

    // switch (layoutType) {
    //   case layoutConstants.LAYOUT_VERTICAL:
    //     if (leftSideBarType === 'fixed' || leftSideBarType === 'scrollable')
    //       dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED));
    //     if (leftSideBarType === 'condensed')
    //       dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED));
    //     break;

    //   case layoutConstants.LAYOUT_FULL:
    //     if (document.body) {
    //       document.body.classList.toggle('hide-menu');
    //     }
    //     break;
    //   default:
    //     break;
    // }
  };

  /**
   * Toggles the right sidebar
   */
  //   const handleRightSideBar = () => {
  //     dispatch(showRightSidebar());
  //   };

  return (
    <>
      <div className={classNames('navbar-custom', navbarCssClasses)}>
        <div className={containerCssClasses}>
          {!hideLogo && (
            <Link to="/" className="topnav-logo">
              <span className="topnav-logo-lg">
                <img src={logo} alt="logo" height="16" />
              </span>
              <span className="topnav-logo-sm">
                <img src={topbarDark ? logoSmLight : logoSmDark} alt="logo" height="16" />
              </span>
            </Link>
          )}

          <ul className="list-unstyled topbar-menu float-end mb-0">
            <li className="notification-list topbar-dropdown d-xl-none">
              {/* <SearchDropdown /> */}
              <button className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none">
                <i className="dripicons-gear noti-icon"></i>
              </button>
            </li>
            <li className="dropdown notification-list topbar-dropdown d-none d-lg-block">
              {/* <LanguageDropdown /> */}
              <button className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none">
                <i className="dripicons-gear noti-icon"></i>
              </button>
            </li>
            <li className="dropdown notification-list">
              <button className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none">
                <i className="dripicons-view-apps noti-icon"></i>
              </button>
              {/* <NotificationDropdown notifications={Notifications} /> */}
            </li>
          </ul>
          <button className="button-menu-mobile open-left" onClick={handleLeftMenuCallBack}>
            <i className="mdi mdi-menu" />
          </button>

          {/* toggle for vertical layout */}
          {/* {(layoutType === layoutConstants.LAYOUT_VERTICAL ||
            layoutType === layoutConstants.LAYOUT_FULL) && (
            <button className="button-menu-mobile open-left" onClick={handleLeftMenuCallBack}>
              <i className="mdi mdi-menu" />
            </button>
          )} */}

          {/* toggle for horizontal layout */}
          {/* {layoutType === layoutConstants.LAYOUT_HORIZONTAL && (
            <Link
              to="#"
              className={classNames('navbar-toggle', { open: isopen })}
              onClick={handleLeftMenuCallBack}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          )} */}

          {/* toggle for detached layout */}
          {/* {layoutType === layoutConstants.LAYOUT_DETACHED && (
            <Link
              to="#"
              className="button-menu-mobile disable-btn"
              onClick={handleLeftMenuCallBack}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          )} */}
          {/* <TopbarSearch /> */}
        </div>
      </div>
    </>
  );
};

export default Topbar;
