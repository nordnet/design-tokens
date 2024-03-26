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
  background_default: string;
  text_hover: string;
  text_pressed: string;
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
  icon_default: string;
  border_default: string;
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
  text_brand: string;
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
      text_default: "#ffffffff",
      text_weak: "#bdbdbdff",
      text_medium: "#1c1c1cff",
      text_strong: "#ffffffff",
      text_disabled: "#6e6e6eff",
      text_focus: "#1c1c1cff",
      text_inactive: "#9e9e9eff",
      background_default: "#1c1c1cff",
      background_weak: "#121212ff",
      background_medium: "#262626ff",
      background_strong: "#333333ff",
      background_hover: "#33333380",
      background_disabled: "#333333ff",
      background_skeleton: "#333333ff",
      background_active: "#262626ff",
      background_inactive: "#333333ff",
      background_select: "#6e6e6eff",
      background_focus: "#ffffffff",
      background_focus_hover: "#f5f5f5ff",
      background_focus_pressed: "#eeeeeeff",
      background_badge: "#333333ff",
      background_data: "#bdbdbdff",
      background_brand_black: "#000000ff",
      background_brand_white: "#ffffffff",
      background_overlay: "#00000099",
      border_default: "#6e6e6eff",
      border_weak: "#262626ff",
      border_medium: "#333333ff",
      border_strong: "#000000ff",
      border_active: "#ffffffff",
      border_focus: "#1c1c1cff",
      border_disabled: "#333333ff",
      border_hover: "#bdbdbdff",
      border_brand: "#ffffff26",
      icon_default: "#ffffffff",
      icon_weak: "#bdbdbdff",
      icon_medium: "#1c1c1cff",
      icon_strong: "#ffffffff",
      icon_disabled: "#6e6e6eff",
      icon_brand: "#1c1c1cff",
      icon_inactive: "#9e9e9eff",
    },
    action: {
      text_default: "#6690ffff",
      text_medium: "#ffffffff",
      text_focus: "#336bffff",
      text_hover: "#adc4ffff",
      text_pressed: "#d6e1ffff",
      text_data: "#00f0e1ff",
      background_default: "#336bffff",
      background_weak: "#142b66ff",
      background_medium: "#1f4099ff",
      background_strong: "#1f4099ff",
      background_disabled: "#1f4099ff",
      background_hover: "#2650bfff",
      background_pressed: "#1f4099ff",
      background_data_risk: "#00c0b4ff",
      background_data_allocation: "#1f4099ff",
      background_data_primary: "#6690ffff",
      background_data_secondary: "#2650bfff",
      background_brand: "#00c8f5ff",
      border_default: "#336bffff",
      border_weak: "#0a1533ff",
      border_focus: "#2650bfff",
      border_hover: "#adc4ffff",
      border_pressed: "#d6e1ffff",
      border_data: "#00f0e1ff",
      icon_default: "#6690ffff",
      icon_medium: "#ffffffff",
      icon_hover: "#adc4ffff",
      icon_pressed: "#d6e1ffff",
      icon_brand: "#00c8f5ff",
    },
    negative: {
      text_default: "#ff2b83ff",
      text_hover: "#ff6aa8ff",
      text_pressed: "#ffaacdff",
      background_default: "#cc2269ff",
      background_weak: "#3e0b20ff",
      background_medium: "#ff2b83ff",
      background_strong: "#ac135aff",
      background_data_graph: "#ac135aff",
      background_data_primary: "#ff2b83ff",
      background_data_secondary: "#cc2269ff",
      background_hover: "#ac135aff",
      background_pressed: "#78013aff",
      background_brand: "#ff2b83ff",
      border_default: "#ff2b83ff",
      icon_default: "#ff2b83ff",
      icon_hover: "#ff6aa8ff",
      icon_pressed: "#ffaacdff",
      icon_brand: "#ff2b83ff",
      text_brand: "#ff2b83ff",
    },
    positive: {
      text_default: "#51cb20ff",
      text_medium: "#d2f500ff",
      text_hover: "#85da62ff",
      background_default: "#51cb20ff",
      background_weak: "#133108ff",
      background_medium: "#85da62ff",
      background_strong: "#41a21aff",
      background_data: "#317a13ff",
      background_brand: "#d2f500ff",
      border_default: "#51cb20ff",
      icon_default: "#51cb20ff",
      icon_focus: "#41a21aff",
      icon_hover: "#85da62ff",
      icon_data: "#336bffff",
      icon_brand: "#d2f500ff",
    },
    warning: {
      text_default: "#ffcf00ff",
      background_default: "#ffcf00ff",
      background_weak: "#614f00ff",
      background_medium: "#332900ff",
      background_strong: "#ffcf00ff",
      icon_default: "#ffcf00ff",
      border_default: "#ffcf00ff",
      icon_strong: "#ffcf00ff",
    },
    error: {
      text_default: "#ff4733ff",
      background_default: "#ff4733ff",
      text_hover: "#ff7e70ff",
      text_pressed: "#ffa399ff",
      background_weak: "#661c14ff",
      background_medium: "#ff4733ff",
      background_hover: "#cc3929ff",
      background_pressed: "#992b1fff",
      border_default: "#ff4733ff",
      icon_default: "#ff4733ff",
      icon_hover: "#ff7e70ff",
      icon_pressed: "#ffa399ff",
    },
    accent: {
      text_default: "#00f0e1ff",
      background_default: "#00f0e1ff",
      background_weak: "#004844ff",
      background_strong: "#00605aff",
      background_brand: "#00f0e1ff",
      background_brand_hover: "#99f9f3ff",
      background_brand_pressed: "#ccfcf9ff",
      icon_default: "#00f0e1ff",
      icon_brand: "#00f0e1ff",
    },
  },
  effect: {
    shadow: {
      low: {
        "0": "0px 0px 20px 0px #00000000",
        "1": "0px 0px 2px 0px #00000000",
      },
      medium: {
        "0": "0px 0px 20px 0px #00000000",
        "1": "0px 0px 2px 0px #00000000",
      },
      high: {
        "0": "0px 0px 20px 0px #0000001f",
        "1": "0px 0px 8px 0px #00000029",
      },
    },
  },
};
