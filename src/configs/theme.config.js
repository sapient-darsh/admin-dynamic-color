import { THEME_ENUM } from "constants/theme.constant";

export const themeConfig = {
  themeColor: "blue",
  direction: THEME_ENUM.DIR_LTR,
  mode: THEME_ENUM.MODE_LIGHT,
  locale: "en",
  primaryColorLevel: 600,
  cardBordered: true,
  panelExpand: false,
  controlSize: "md",
  navMode: "themed",
  layout: {
    type: THEME_ENUM.LAYOUT_TYPE_MODERN,
    sideNavCollapse: false,
  },
};
