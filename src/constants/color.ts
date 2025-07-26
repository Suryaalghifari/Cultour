// src/ui/theme/colors.ts

const BaseColors = {
  white: "#FFFFFF",
  black: "#000000",
  dark: "#1A1A1A",
  primary: "#EEC887",
  primary50: "rgba(238, 200, 135, 0.5)",
};

const Colors = {
  // 🎨 Base
  ...BaseColors,

  // 🖼️ Backgrounds
  backgroundDefault: BaseColors.white,
  backgroundDark: BaseColors.dark,
  backgroundPrimary: BaseColors.primary50,

  // 🔤 Text
  textPrimary: BaseColors.dark,
  textOnPrimary: BaseColors.white,
  textInverse: BaseColors.white,

  // 🔘 Buttons
  buttonPrimary: BaseColors.primary,
  buttonPrimaryText: BaseColors.white,

  // 🧭 Headers, TabBar, dll
  headerBackground: BaseColors.primary,
  headerText: BaseColors.white,
};

export default Colors;
