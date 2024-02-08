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
  text_focus: string;
  text_disabled: string;
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
      text_default: "#1c1c1c",
      text_weak: "#6e6e6e",
      text_medium: "#ffffff",
      text_strong: "#ffffff",
      text_focus: "#1c1c1c",
      text_disabled: "#9e9e9e",
      background_default: "#ffffff",
      background_weak: "#ffffff",
      background_medium: "#f5f5f5",
      background_strong: "#f5f5f5",
      background_hover: "#f5f5f5",
      background_disabled: "#eeeeee",
      background_skeleton: "#eeeeee",
      background_active: "#ffffff",
      background_inactive: "#e0e0e0",
      background_select: "#ffffff",
      background_focus: "#1c1c1c",
      background_focus_hover: "#262626",
      background_focus_pressed: "#333333",
      background_data: "#6e6e6e",
      background_brand_black: "#000000",
      background_brand_white: "#ffffff",
      background_overlay: "#000000",
      border_default: "#bdbdbd",
      border_weak: "#eeeeee",
      border_medium: "#eeeeee",
      border_strong: "#e0e0e0",
      border_active: "#1c1c1c",
      border_focus: "#ffffff",
      border_disabled: "#eeeeee",
      border_hover: "#6e6e6e",
      border_brand: "#000000",
      icon_default: "#1c1c1c",
      icon_weak: "#6e6e6e",
      icon_medium: "#ffffff",
      icon_strong: "#ffffff",
      icon_disabled: "#9e9e9e",
      icon_brand: "#1c1c1c",
    },
    action: {
      text_default: "#336bff",
      text_medium: "#336bff",
      text_focus: "#6690ff",
      text_hover: "#2650bf",
      text_pressed: "#1f4099",
      text_data: "#336bff",
      background_default: "#336bff",
      background_weak: "#eaf0ff",
      background_medium: "#adc4ff",
      background_strong: "#1f4099",
      background_disabled: "#d6e1ff",
      background_hover: "#2650bf",
      background_pressed: "#1f4099",
      background_data_risk: "#2650bf",
      background_data_allocation: "#eaf0ff",
      background_data_primary: "#2650bf",
      background_data_secondary: "#6690ff",
      background_brand: "#00c8f5",
      border_default: "#336bff",
      border_weak: "#adc4ff",
      border_focus: "#d6e1ff",
      border_hover: "#2650bf",
      border_pressed: "#1f4099",
      border_data: "#336bff",
      icon_default: "#336bff",
      icon_medium: "#336bff",
      icon_hover: "#2650bf",
      icon_pressed: "#1f4099",
      icon_brand: "#00c8f5",
    },
    negative: {
      text_default: "#cc2269",
      text_hover: "#ac135a",
      text_pressed: "#78013a",
      text_brand: "#ff2b83",
      background_default: "#cc2269",
      background_weak: "#f6e7ee",
      background_medium: "#cc2269",
      background_strong: "#ac135a",
      background_data_graph: "#ffaacd",
      background_data_primary: "#cc2269",
      background_data_secondary: "#ff2b83",
      background_hover: "#ac135a",
      background_pressed: "#78013a",
      background_brand: "#ff2b83",
      border_default: "#cc2269",
      icon_default: "#cc2269",
      icon_hover: "#ac135a",
      icon_pressed: "#78013a",
      icon_brand: "#ff2b83",
    },
    positive: {
      text_default: "#41a21a",
      text_medium: "#41a21a",
      text_hover: "#368716",
      background_default: "#41a21a",
      background_weak: "#edfae8",
      background_medium: "#85da62",
      background_strong: "#41a21a",
      background_data: "#b9eaa6",
      background_brand: "#d2f500",
      border_default: "#41a21a",
      icon_default: "#41a21a",
      icon_focus: "#51cb20",
      icon_hover: "#368716",
      icon_data: "#41a21a",
      icon_brand: "#d2f500",
    },
    warning: {
      text_default: "#614f00",
      background_default: "#e6bb00",
      background_weak: "#fffdf2",
      background_medium: "#fff7d4",
      background_strong: "#ffcf00",
      border_default: "#e6bb00",
      icon_default: "#e6bb00",
      icon_strong: "#ffcf00",
    },
    error: {
      text_default: "#cc3929",
      text_hover: "#992b1f",
      text_pressed: "#661c14",
      background_default: "#ff4733",
      background_weak: "#ffecea",
      background_medium: "#cc3929",
      background_hover: "#cc3929",
      background_pressed: "#992b1f",
      border_default: "#cc3929",
      icon_default: "#cc3929",
      icon_hover: "#992b1f",
      icon_pressed: "#661c14",
    },
    accent: {
      text_default: "#009087",
      background_default: "#00c0b4",
      background_weak: "#e5fdfc",
      background_strong: "#00605a",
      background_brand: "#00f0e1",
      background_brand_hover: "#99f9f3",
      background_brand_pressed: "#ccfcf9",
      icon_default: "#009087",
      icon_brand: "#00f0e1",
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
