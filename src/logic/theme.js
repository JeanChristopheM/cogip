const themes = {
  original: {
    id: "0",
    clrBackground: "#e7ecef",
    clrBackgroundLow: "#f8f8fb",
    clrText: "#274c77",
    clrTextHalf: "#516f91",
    clrTextLow: "#879cb3",
    clrShade: "#274c77",
  },
  dark: {
    id: "1",
    clrBackground: "#111218",
    clrBackgroundLow: "#191B24",
    clrText: "#e7ecef",
    clrTextHalf: "#edf1f3",
    clrTextLow: "#f8f8fb79",
    clrShade: "#3B3F54",
  },
  salmon: {
    id: "2",
    clrBackground: "#E3655B",
    clrBackgroundLow: "#E77B73",
    clrText: "#20221B",
    clrTextHalf: "#2B2D24",
    clrTextLow: "#414436",
    clrShade: "#21221B",
  },
  forest: {
    id: "3",
    clrBackground: "#463935",
    clrBackgroundLow: "#314b30",
    clrText: "#e5dedc",
    clrTextHalf: "#e5dedca3",
    clrTextLow: "#e5dedca3",
    clrShade: "#272220",
  },
};
const switchTheme = (themeObject) => {
  const root = document.documentElement.style;
  for (const [key, value] of Object.entries(themeObject)) {
    let property = key
      .split(/(?=[A-Z])/)
      .join("-")
      .toLocaleLowerCase();
    root.setProperty(`--${property}`, value);
  }
};
export { themes, switchTheme };
