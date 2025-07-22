const black = "#000000";
const black10 = "#00000010";
const black50 = "#00000050";
const blackish = "#151718";
const white = "#FFFFFF";
const white10 = "#FFFFFF10";
const white50 = "#FFFFFF50";
const whiteish = "#F5F5F5";

export const Colors = {
  light: {
    text: {
      default: black,
      hovered: black50,
    },
    background: white,
    button: {
      background: {
        default: white,
        hovered: black10,
      },
    },
    icon_fill: white,
  },
  dark: {
    text: {
      default: whiteish,
      hovered: white50,
    },
    background: blackish,
    button: {
      background: {
        default: blackish,
        hovered: white10,
      },
    },
    icon_fill: blackish,
  },
};
