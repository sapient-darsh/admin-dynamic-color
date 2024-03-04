import React from "react";
import { DASHBOARD_PREFIX_PATH } from "constants/route.constant";

const appsRoute = [
  {
    key: "apps.dashboard",
    path: `${DASHBOARD_PREFIX_PATH}`,
    component: React.lazy(() => import("views/dashboard")),
    authority: [],
  },
];

export default appsRoute;
