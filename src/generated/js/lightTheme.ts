/**
 * Do not edit directly
 * Generated on Wed, 10 May 2023 10:23:42 GMT
 */

export interface LightTheme {
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
  background_data: string;
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
  /** @deprecated */
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
export const colors: LightTheme = {
  color: {
    neutral: {
      text_default: "#212121ff",
      text_weak: "#6e6e6eff",
      text_medium: "#ffffffff",
      text_strong: "#ffffffff",
      text_disabled: "#9e9e9eff",
      background_default: "#ffffffff",
      background_default_app: "#ffffffff",
      background_weak: "#f5f5f5ff",
      background_weak_app: "#f5f5f5ff",
      background_medium: "#f5f5f5ff",
      background_strong: "#e0e0e0ff",
      background_hover: "#f5f5f5ff",
      background_disabled: "#eeeeeeff",
      background_disabled_app: "#eeeeeeff",
      background_skeleton: "#eeeeeeff",
      background_active: "#ffffffff",
      background_inactive: "#424242ff",
      background_focus: "#212121ff",
      background_focus_hover: "#424242ff",
      background_focus_pressed: "#6e6e6eff",
      background_data: "#6e6e6eff",
      background_brand_black: "#000000ff",
      background_brand_white: "#ffffffff",
      background_content: "#ffffffff",
      background_overlay: "#00000066",
      border_default: "#bdbdbdff",
      border_weak: "#eeeeeeff",
      border_weak_app: "#eeeeeeff",
      border_medium: "#eeeeeeff",
      border_strong: "#ffffffff",
      border_disabled: "#bdbdbdff",
      border_hover: "#6e6e6eff",
      icon_default: "#212121ff",
      icon_weak: "#6e6e6eff",
      icon_medium: "#ffffffff",
      icon_strong: "#ffffffff",
      icon_disabled: "#9e9e9eff",
      icon_brand: "#212121ff",
      border_brand: "#0000001a",
    },
    action: {
      text_default: "#336bffff",
      text_medium: "#336bffff",
      text_hover: "#2650bfff",
      text_pressed: "#1f4099ff",
      background_default: "#336bffff",
      background_weak: "#eaf0ffff",
      background_medium: "#adc4ffff",
      background_strong: "#1f4099ff",
      background_disabled: "#d6e1ffff",
      background_hover: "#2650bfff",
      background_pressed: "#1f4099ff",
      background_data: "#2650bfff",
      background_brand: "#00c8f5ff",
      border_default: "#336bffff",
      border_weak: "#adc4ffff",
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
      background_data: "#ffaacdff",
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
};
