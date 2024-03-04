import { NAV_ITEM_TYPE_ITEM } from "constants/navigation.constant";
import { ADMIN, USER } from "constants/roles.constant";
import { DASHBOARD_PREFIX_PATH } from "constants/route.constant";

const dashboardNavigationConfig = [
  {
    key: "dashboard",
    path: `${DASHBOARD_PREFIX_PATH}`,
    title: "Dashboard",
    translateKey: "",
    icon: "",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN, USER],
    subMenu: [],
  },
];

export default dashboardNavigationConfig;
