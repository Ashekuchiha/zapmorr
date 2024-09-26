
import { lazy } from "react";
import { Navigate } from "react-router";

import  Service from  "../views/MyWidgets/ashik/Service"
import  ServiceCategory from  "../views/MyWidgets/ashik/ServiceCategory"

import Loadable from "src/layouts/full/shared/loadable/Loadable";
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const ModernDash = Loadable(lazy(() => import('../views/dashboard/Modern')));



const Router = [
    {
      path: '/',
      element: <FullLayout />,
      children: [
        { path: '/', element: <Navigate to="/admin" /> },
        { path: '/admin', exact: true, element: <ModernDash /> },
        { path: '/admin/service', element: <Service /> },
        { path: '/admin/servicecategory', element: <ServiceCategory /> },
      ]
    }
  ]

export default Router;
