export interface DarkTheme {
  color: Color;
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
  background_data: string;
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
  text_hover: string;
  text_pressed: string;
  background_default: string;
  background_weak: string;
  background_medium: string;
  background_strong: string;
  background_disabled: string;
  background_hover: string;
  background_pressed: string;
  background_data: string;
  background_brand: string;
  border_default: string;
  border_weak: string;
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
  background_default: string;
  background_default_app: string;
  background_weak: string;
  background_weak_app: string;
  background_medium: string;
  background_strong: string;
  background_hover: string;
  background_disabled: string;
  background_disabled_app: string;
  background_skeleton: string;
  background_active: string;
  background_inactive: string;
  background_focus: string;
  background_focus_hover: string;
  background_focus_pressed: string;
  background_data: string;
  background_brand_black: string;
  background_brand_white: string;
  background_content: string;
  background_overlay: string;
  border_default: string;
  border_weak: string;
  border_weak_app: string;
  border_medium: string;
  border_strong: string;
  border_disabled: string;
  border_hover: string;
  icon_default: string;
  icon_weak: string;
  icon_medium: string;
  icon_strong: string;
  icon_disabled: string;
  icon_brand: string;
  border_brand: string;
}
export const colors: DarkTheme = {
  color: {
    neutral: {
      text_default: "#ffffffff",
      text_weak: "#bdbdbdff",
      text_medium: "#212121ff",
      text_strong: "#ffffffff",
      text_disabled: "#6e6e6eff",
      background_default: "#212121ff",
      background_default_app: "#121212ff",
      background_weak: "#121212ff",
      background_weak_app: "#212121ff",
      background_medium: "#424242ff",
      background_strong: "#424242ff",
      background_hover: "#42424280",
      background_disabled: "#121212ff",
      background_disabled_app: "#212121ff",
      background_skeleton: "#424242ff",
      background_active: "#424242ff",
      background_inactive: "#424242ff",
      background_focus: "#ffffffff",
      background_focus_hover: "#f5f5f5ff",
      background_focus_pressed: "#eeeeeeff",
      background_data: "#bdbdbdff",
      background_brand_black: "#000000ff",
      background_brand_white: "#ffffffff",
      background_content: "#000000ff",
      background_overlay: "#00000099",
      border_default: "#6e6e6eff",
      border_weak: "#121212ff",
      border_weak_app: "#212121ff",
      border_medium: "#424242ff",
      border_strong: "#212121ff",
      border_disabled: "#424242ff",
      border_hover: "#bdbdbdff",
      icon_default: "#ffffffff",
      icon_weak: "#bdbdbdff",
      icon_medium: "#212121ff",
      icon_strong: "#ffffffff",
      icon_disabled: "#6e6e6eff",
      icon_brand: "#212121ff",
      border_brand: "#ffffff26",
    },
    action: {
      text_default: "#6690ffff",
      text_medium: "#ffffffff",
      text_hover: "#adc4ffff",
      text_pressed: "#d6e1ffff",
      background_default: "#336bffff",
      background_weak: "#142b66ff",
      background_medium: "#1f4099ff",
      background_strong: "#1f4099ff",
      background_disabled: "#1f4099ff",
      background_hover: "#2650bfff",
      background_pressed: "#1f4099ff",
      background_data: "#00c0b4ff",
      background_brand: "#00c8f5ff",
      border_default: "#336bffff",
      border_weak: "#0a1533ff",
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
      background_weak: "#590f2eff",
      background_medium: "#ff2b83ff",
      background_strong: "#ac135aff",
      background_data: "#ac135aff",
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
      background_weak: "#20510dff",
      background_medium: "#85da62ff",
      background_strong: "#41a21aff",
      background_data: "#317a13ff",
      background_brand: "#d2f500ff",
      border_default: "#51cb20ff",
      icon_default: "#51cb20ff",
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
};
