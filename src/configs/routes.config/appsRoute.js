import React from "react";
import { DASHBOARD_PREFIX_PATH } from "constants/route.constant";
import { ADMIN, USER } from "constants/roles.constant";

const appsRoute = [
  {
    key: "dashboard",
    path: `${DASHBOARD_PREFIX_PATH}`,
    component: React.lazy(() => import("views/dashboard")),
    authority: [ADMIN, USER],
  },
];

export default appsRoute;
