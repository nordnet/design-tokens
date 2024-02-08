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
  text_focus: string;
  text_disabled: string;
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
}
export const theme: Theme = {
  color: {
    neutral: {
      text_default: "#ffffff",
      text_weak: "#bdbdbd",
      text_medium: "#1c1c1c",
      text_strong: "#ffffff",
      text_focus: "#1c1c1c",
      text_disabled: "#6e6e6e",
      background_default: "#1c1c1c",
      background_weak: "#121212",
      background_medium: "#262626",
      background_strong: "#333333",
      background_hover: "#333333",
      background_disabled: "#333333",
      background_skeleton: "#333333",
      background_active: "#262626",
      background_inactive: "#333333",
      background_select: "#6e6e6e",
      background_focus: "#ffffff",
      background_focus_hover: "#f5f5f5",
      background_focus_pressed: "#eeeeee",
      background_data: "#bdbdbd",
      background_brand_black: "#000000",
      background_brand_white: "#ffffff",
      background_overlay: "#000000",
      border_default: "#6e6e6e",
      border_weak: "#262626",
      border_medium: "#333333",
      border_strong: "#333333",
      border_active: "#ffffff",
      border_focus: "#1c1c1c",
      border_disabled: "#333333",
      border_hover: "#bdbdbd",
      border_brand: "#ffffff",
      icon_default: "#ffffff",
      icon_weak: "#bdbdbd",
      icon_medium: "#1c1c1c",
      icon_strong: "#ffffff",
      icon_disabled: "#6e6e6e",
      icon_brand: "#1c1c1c",
    },
    action: {
      text_default: "#6690ff",
      text_medium: "#ffffff",
      text_focus: "#336bff",
      text_hover: "#adc4ff",
      text_pressed: "#d6e1ff",
      text_data: "#00f0e1",
      background_default: "#336bff",
      background_weak: "#142b66",
      background_medium: "#1f4099",
      background_strong: "#1f4099",
      background_disabled: "#1f4099",
      background_hover: "#2650bf",
      background_pressed: "#1f4099",
      background_data_risk: "#00c0b4",
      background_data_allocation: "#1f4099",
      background_data_primary: "#6690ff",
      background_data_secondary: "#2650bf",
      background_brand: "#00c8f5",
      border_default: "#336bff",
      border_weak: "#0a1533",
      border_focus: "#2650bf",
      border_hover: "#adc4ff",
      border_pressed: "#d6e1ff",
      border_data: "#00f0e1",
      icon_default: "#6690ff",
      icon_medium: "#ffffff",
      icon_hover: "#adc4ff",
      icon_pressed: "#d6e1ff",
      icon_brand: "#00c8f5",
    },
    negative: {
      text_default: "#ff2b83",
      text_hover: "#ff6aa8",
      text_pressed: "#ffaacd",
      background_default: "#cc2269",
      background_weak: "#590f2e",
      background_medium: "#ff2b83",
      background_strong: "#ac135a",
      background_data_graph: "#ac135a",
      background_data_primary: "#ff2b83",
      background_data_secondary: "#cc2269",
      background_hover: "#ac135a",
      background_pressed: "#78013a",
      background_brand: "#ff2b83",
      border_default: "#ff2b83",
      icon_default: "#ff2b83",
      icon_hover: "#ff6aa8",
      icon_pressed: "#ffaacd",
      icon_brand: "#ff2b83",
      text_brand: "#ff2b83",
    },
    positive: {
      text_default: "#51cb20",
      text_medium: "#d2f500",
      text_hover: "#85da62",
      background_default: "#51cb20",
      background_weak: "#20510d",
      background_medium: "#85da62",
      background_strong: "#41a21a",
      background_data: "#317a13",
      background_brand: "#d2f500",
      border_default: "#51cb20",
      icon_default: "#51cb20",
      icon_focus: "#41a21a",
      icon_hover: "#85da62",
      icon_data: "#336bff",
      icon_brand: "#d2f500",
    },
    warning: {
      text_default: "#ffcf00",
      background_default: "#ffcf00",
      background_weak: "#614f00",
      background_medium: "#332900",
      background_strong: "#ffcf00",
      icon_default: "#ffcf00",
      border_default: "#ffcf00",
      icon_strong: "#ffcf00",
    },
    error: {
      text_default: "#ff4733",
      background_default: "#ff4733",
      text_hover: "#ff7e70",
      text_pressed: "#ffa399",
      background_weak: "#661c14",
      background_medium: "#ff4733",
      background_hover: "#cc3929",
      background_pressed: "#992b1f",
      border_default: "#ff4733",
      icon_default: "#ff4733",
      icon_hover: "#ff7e70",
      icon_pressed: "#ffa399",
    },
    accent: {
      text_default: "#00f0e1",
      background_default: "#00f0e1",
      background_weak: "#004844",
      background_strong: "#00605a",
      background_brand: "#00f0e1",
      background_brand_hover: "#99f9f3",
      background_brand_pressed: "#ccfcf9",
      icon_default: "#00f0e1",
      icon_brand: "#00f0e1",
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
