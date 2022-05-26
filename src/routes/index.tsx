import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import VerticalLayout from '../layouts/VerticalLayout';

const HomePage = React.lazy(() => import('../pages/homepage/HomePage'));
// const Todos = React.lazy(() => import('../pages/todos/Todos'));
const OptimizePerformance = React.lazy(
  () => import('../pages/optimize-perfomance/OptimizePerfomance')
);

const Immutable = React.lazy(() => import('../pages/immutable/Immutable'));
const DebouncingInput = React.lazy(() => import('../pages/debouncingInput/DebouncingInput'));
const CarouselExample = React.lazy(() => import('../pages/CarouselExample/CarouselExample'));

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
        },
        {
          path: '/immutable',
          children: [
            {
              path: '',
              element: <LoadComponent component={Immutable} />
            }
          ]
        },
        {
          path: '/debouncingInput',
          element: <LoadComponent component={DebouncingInput} />
        },
        {
          path: '/carouselExample',
          element: <LoadComponent component={CarouselExample} />
        }
      ]
    }
  ]);
};

export { AllRoutes };
