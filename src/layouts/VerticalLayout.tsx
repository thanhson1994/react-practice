// @flow
import React, { Suspense, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

// actions
// constants
// import * as layoutConstants from '../constants/layout';

// components
// import ThemeCustomizer from '../components/ThemeCustomizer/';

// utils
import { changeBodyAttribute } from '../../../../Super-React/super-react/src/utils';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import('./Topbar'));
const LeftSidebar = React.lazy(() => import('./LeftSidebar'));
const Footer = React.lazy(() => import('./Footer'));
// const RightSidebar = React.lazy(() => import('./RightSidebar'));

const loading = () => <div className=""></div>;

// type VerticalLayoutState = {
//   isMenuOpened?: boolean;
// };

const VerticalLayout = () => {
  //   const { leftSideBarTheme, leftSideBarType, layoutWidth } = useSelector((state) => ({
  //     layoutWidth: state.Layout.layoutWidth,
  //     leftSideBarTheme: state.Layout.leftSideBarTheme,
  //     leftSideBarType: state.Layout.leftSideBarType
  //   }));

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isCondensed, setIsCondensed] = useState(false);

  /*
   * layout defaults
   */
  //   useEffect(() => {
  //     changeBodyAttribute('data-layout', layoutConstants.LAYOUT_VERTICAL);
  //   }, []);

  //   useEffect(() => {
  //     changeBodyAttribute('data-layout-mode', layoutWidth);
  //   }, [layoutWidth]);

  useEffect(() => {
    changeBodyAttribute('data-leftbar-theme', 'dark');
  }, []);

  useEffect(() => {
    const leftSideBarType = isCondensed ? 'condensed' : 'fixed';
    changeBodyAttribute('data-leftbar-compact-mode', leftSideBarType);
  }, [isCondensed]);

  /**
   * Open the menu when having mobile screen
   */
  const openMenu = () => {
    setIsMenuOpened((prevState) => !prevState);
    setIsCondensed((prevState) => !prevState);

    if (document.body) {
      if (isMenuOpened) {
        document.body.classList.remove('sidebar-enable');
      } else {
        document.body.classList.add('sidebar-enable');
      }
    }
  };

  //   const updateDimensions = useCallback(() => {
  //     // activate the condensed sidebar if smaller devices like ipad or tablet
  //     if (window.innerWidth >= 768 && window.innerWidth <= 1028) {
  //       dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED));
  //     } else if (window.innerWidth > 1028) {
  //       dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED));
  //     }
  //   }, [dispatch]);

  //   useEffect(() => {
  //     window.addEventListener('resize', updateDimensions);

  //     return () => {
  //       window.removeEventListener('resize', updateDimensions);
  //     };
  //   }, [dispatch, updateDimensions]);

  //   const isCondensed = leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED;
  //   const isLight = leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_LIGHT;
  console.log(123);
  return (
    <>
      <div className="wrapper">
        <Suspense fallback={loading()}>
          <LeftSidebar isCondensed={isCondensed} hideUserProfile={true} />
        </Suspense>
        <div className="content-page">
          <div className="content">
            <Suspense fallback={loading()}>
              <Topbar openLeftMenuCallBack={openMenu} hideLogo={true} />
            </Suspense>
            <Container fluid>
              <Outlet />
            </Container>
          </div>

          <Suspense fallback={loading()}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </>
  );
};
export default VerticalLayout;
