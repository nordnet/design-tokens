export interface Theme {
  color: Color;
  effect: Effect;
}
interface Effect {
  shadow: Shadow;
}
interface Shadow {
  low: Low;
  medium: Low;
  high: Low;
}
interface Low {
  "0": string;
  "1": string;
}
interface Color {
  neutral: Neutral;
  action: Action;
  negative: Negative;
  positive: Positive;
  warning: Warning;
  error: Error;
  accent: Accent;
}
interface Accent {
  text_default: string;
  background_default: string;
  background_weak: string;
  background_strong: string;
  background_brand: string;
  background_brand_hover: string;
  background_brand_pressed: string;
  icon_default: string;
  icon_brand: string;
}
interface Error {
  text_default: string;
  text_hover: string;
  text_pressed: string;
  background_default: string;
  background_weak: string;
  background_medium: string;
  background_hover: string;
  background_pressed: string;
  border_default: string;
  icon_default: string;
  icon_hover: string;
  icon_pressed: string;
}
interface Warning {
  text_default: string;
  background_default: string;
  background_weak: string;
  background_medium: string;
  background_strong: string;
  border_default: string;
  icon_default: string;
  icon_strong: string;
}
interface Positive {
  text_default: string;
  text_medium: string;
  text_hover: string;
  background_default: string;
  background_weak: string;
  background_medium: string;
  background_strong: string;
  background_data: string;
  background_brand: string;
  border_default: string;
  icon_default: string;
  icon_focus: string;
  icon_hover: string;
  icon_data: string;
  icon_brand: string;
}
interface Negative {
  text_default: string;
  text_hover: string;
  text_pressed: string;
  text_brand: string;
  background_default: string;
  background_weak: string;
  background_medium: string;
  background_strong: string;
  background_data_graph: string;
  background_data_primary: string;
  background_data_secondary: string;
  background_hover: string;
  background_pressed: string;
  background_brand: string;
  border_default: string;
  icon_default: string;
  icon_hover: string;
  icon_pressed: string;
  icon_brand: string;
}
interface Action {
  text_default: string;
  text_medium: string;
  text_focus: string;
  text_hover: string;
  text_pressed: string;
  text_data: string;
  background_default: string;
  background_weak: string;
  background_medium: string;
  background_strong: string;
  background_disabled: string;
  background_hover: string;
  background_pressed: string;
  background_data_risk: string;
  background_data_allocation: string;
  background_data_primary: string;
  background_data_secondary: string;
  background_brand: string;
  border_default: string;
  border_weak: string;
  border_focus: string;
  border_hover: string;
  border_pressed: string;
  border_data: string;
  icon_default: string;
  icon_medium: string;
  icon_hover: string;
  icon_pressed: string;
  icon_brand: string;
}
interface Neutral {
  text_default: string;
  text_weak: string;
  text_medium: string;
  text_strong: string;
  text_disabled: string;
  text_focus: string;
  text_inactive: string;
  background_default: string;
  background_weak: string;
  background_medium: string;
  background_strong: string;
  background_hover: string;
  background_disabled: string;
  /** @deprecated */
  background_skeleton: string;
  background_active: string;
  background_inactive: string;
  background_select: string;
  background_focus: string;
  background_focus_hover: string;
  background_focus_pressed: string;
  background_badge: string;
  background_data: string;
  background_brand_black: string;
  background_brand_white: string;
  background_overlay: string;
  border_default: string;
  border_weak: string;
  border_medium: string;
  border_strong: string;
  border_active: string;
  border_focus: string;
  border_disabled: string;
  border_hover: string;
  border_brand: string;
  icon_default: string;
  icon_weak: string;
  icon_medium: string;
  icon_strong: string;
  icon_disabled: string;
  icon_brand: string;
  icon_inactive: string;
}
export const theme: Theme = {
  color: {
    neutral: {
      text_default: "#1c1c1cff",
      text_weak: "#6e6e6eff",
      text_medium: "#ffffffff",
      text_strong: "#ffffffff",
      text_disabled: "#9e9e9eff",
      text_focus: "#1c1c1cff",
      text_inactive: "#9e9e9eff",
      background_default: "#ffffffff",
      background_weak: "#ffffffff",
      background_medium: "#f5f5f5ff",
      background_strong: "#f5f5f5ff",
      background_hover: "#f5f5f5ff",
      background_disabled: "#eeeeeeff",
      background_skeleton: "#eeeeeeff",
      background_active: "#ffffffff",
      background_inactive: "#e0e0e0ff",
      background_select: "#ffffffff",
      background_focus: "#1c1c1cff",
      background_focus_hover: "#262626ff",
      background_focus_pressed: "#333333ff",
      background_badge: "#333333ff",
      background_data: "#6e6e6eff",
      background_brand_black: "#000000ff",
      background_brand_white: "#ffffffff",
      background_overlay: "#00000066",
      border_default: "#bdbdbdff",
      border_weak: "#eeeeeeff",
      border_medium: "#e0e0e0ff",
      border_strong: "#f5f5f5ff",
      border_active: "#1c1c1cff",
      border_focus: "#ffffffff",
      border_disabled: "#eeeeeeff",
      border_hover: "#6e6e6eff",
      border_brand: "#0000001a",
      icon_default: "#1c1c1cff",
      icon_weak: "#6e6e6eff",
      icon_medium: "#ffffffff",
      icon_strong: "#ffffffff",
      icon_disabled: "#9e9e9eff",
      icon_brand: "#1c1c1cff",
      icon_inactive: "#9e9e9eff",
    },
    action: {
      text_default: "#336bffff",
      text_medium: "#336bffff",
      text_focus: "#6690ffff",
      text_hover: "#2650bfff",
      text_pressed: "#1f4099ff",
      text_data: "#336bffff",
      background_default: "#336bffff",
      background_weak: "#eaf0ffff",
      background_medium: "#adc4ffff",
      background_strong: "#1f4099ff",
      background_disabled: "#d6e1ffff",
      background_hover: "#2650bfff",
      background_pressed: "#1f4099ff",
      background_data_risk: "#2650bfff",
      background_data_allocation: "#eaf0ffff",
      background_data_primary: "#2650bfff",
      background_data_secondary: "#6690ffff",
      background_brand: "#00c8f5ff",
      border_default: "#336bffff",
      border_weak: "#adc4ffff",
      border_focus: "#d6e1ffff",
      border_hover: "#2650bfff",
      border_pressed: "#1f4099ff",
      border_data: "#336bffff",
      icon_default: "#336bffff",
      icon_medium: "#336bffff",
      icon_hover: "#2650bfff",
      icon_pressed: "#1f4099ff",
      icon_brand: "#00c8f5ff",
    },
    negative: {
      text_default: "#cc2269ff",
      text_hover: "#ac135aff",
      text_pressed: "#78013aff",
      text_brand: "#ff2b83ff",
      background_default: "#cc2269ff",
      background_weak: "#f6e7eeff",
      background_medium: "#cc2269ff",
      background_strong: "#ac135aff",
      background_data_graph: "#ffaacdff",
      background_data_primary: "#cc2269ff",
      background_data_secondary: "#ff2b83ff",
      background_hover: "#ac135aff",
      background_pressed: "#78013aff",
      background_brand: "#ff2b83ff",
      border_default: "#cc2269ff",
      icon_default: "#cc2269ff",
      icon_hover: "#ac135aff",
      icon_pressed: "#78013aff",
      icon_brand: "#ff2b83ff",
    },
    positive: {
      text_default: "#41a21aff",
      text_medium: "#41a21aff",
      text_hover: "#368716ff",
      background_default: "#41a21aff",
      background_weak: "#edfae8ff",
      background_medium: "#85da62ff",
      background_strong: "#41a21aff",
      background_data: "#b9eaa6ff",
      background_brand: "#d2f500ff",
      border_default: "#41a21aff",
      icon_default: "#41a21aff",
      icon_focus: "#51cb20ff",
      icon_hover: "#368716ff",
      icon_data: "#41a21aff",
      icon_brand: "#d2f500ff",
    },
    warning: {
      text_default: "#614f00ff",
      background_default: "#e6bb00ff",
      background_weak: "#fffdf2ff",
      background_medium: "#fff7d4ff",
      background_strong: "#ffcf00ff",
      border_default: "#e6bb00ff",
      icon_default: "#e6bb00ff",
      icon_strong: "#ffcf00ff",
    },
    error: {
      text_default: "#cc3929ff",
      text_hover: "#992b1fff",
      text_pressed: "#661c14ff",
      background_default: "#ff4733ff",
      background_weak: "#ffeceaff",
      background_medium: "#cc3929ff",
      background_hover: "#cc3929ff",
      background_pressed: "#992b1fff",
      border_default: "#cc3929ff",
      icon_default: "#cc3929ff",
      icon_hover: "#992b1fff",
      icon_pressed: "#661c14ff",
    },
    accent: {
      text_default: "#009087ff",
      background_default: "#00c0b4ff",
      background_weak: "#e5fdfcff",
      background_strong: "#00605aff",
      background_brand: "#00f0e1ff",
      background_brand_hover: "#99f9f3ff",
      background_brand_pressed: "#ccfcf9ff",
      icon_default: "#009087ff",
      icon_brand: "#00f0e1ff",
    },
  },
  effect: {
    shadow: {
      low: {
        "0": "0px 0px 20px 0px #0000000a",
        "1": "0px 0px 2px 0px #00000014",
      },
      medium: {
        "0": "0px 0px 20px 0px #0000000f",
        "1": "0px 0px 2px 0px #0000001f",
      },
      high: {
        "0": "0px 0px 20px 0px #00000014",
        "1": "0px 0px 8px 0px #0000001f",
      },
    },
  },
};
