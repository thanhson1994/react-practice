import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import VerticalLayout from '../layouts/VerticalLayout';

const HomePage = React.lazy(() => import('../pages/homepage/HomePage'));
// const Todos = React.lazy(() => import('../pages/todos/Todos'));
const OptimizePerformance = React.lazy(
  () => import('../pages/optimize-perfomance/OptimizePerfomance')
);

// const otherPublicRoutes = [
//   {
//     path: '/home',
//     name: 'home',
//     component: HomePage,
//     route: Route
//   },
//   {
//     path: '/todos',
//     name: 'todos',
//     component: Todos,
//     route: Route
//   },
//   {
//     path: '/optimize',
//     name: 'optimize',
//     component: OptimizePerformance,
//     route: Route
//   }
// ];

// const flattenRoutes = (routes: any) => {
//   let flatRoutes: any = [];

//   routes = routes || [];
//   routes.forEach((item: any) => {
//     flatRoutes.push(item);

//     if (typeof item.children !== 'undefined') {
//       flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
//     }
//   });
//   return flatRoutes;
// };

// const publicRoutes = [...otherPublicRoutes];
// const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);

// export { publicProtectedFlattenRoutes };
type LoadComponentProps = {
  // eslint-disable-next-line no-undef
  component: React.LazyExoticComponent<() => JSX.Element>;
};
const loading = () => <div className=""></div>;

export const LoadComponent = ({ component: Component }: LoadComponentProps) => (
  <Suspense fallback={loading()}>
    <Component />
  </Suspense>
);

const AllRoutes = () => {
  let Layout = VerticalLayout;

  return useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <LoadComponent component={HomePage} />
        },
        {
          path: '/optimize',
          children: [
            {
              path: '',
              element: <LoadComponent component={OptimizePerformance} />
            }
          ]
        }
      ]
    }
  ]);
};

export { AllRoutes };
