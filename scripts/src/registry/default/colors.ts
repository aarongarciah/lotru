import type { RegistryColor } from "../schema";

export const colors: RegistryColor[] = [
  {
    id: "colors/neutral",
    name: "Neutral",
    tokens: {
      light: {
        color: {
          background: "0 0% 100%",
          backgroundHover: "240 5% 96%",
          backgroundPressed: "240 5% 90%",
          backgroundDisabled: "240 5% 96%",
          backgroundSubtle: "0 0% 98%",
          backgroundSubtleHover: "240 5% 96%",
          backgroundSubtlePressed: "240 5% 90%",
          backgroundHighlight: "210 100% 95%",
          backgroundHighlightHover: "210 100% 90%",
          backgroundOverlay: "224 71% 4% / 40%",
          border: "240 5% 90%",
          borderStrong: "240 5% 83%",
          borderTransparent: "0 0% 100%",
          foreground: "240 5% 10%",
          foregroundMuted: "0 0% 39%",
          foregroundDisabled: "240 5% 83%",
          foregroundSubtle: "240 5% 35%",
        },
      },
      dark: {
        color: {
          background: "0 0% 7%",
          backgroundHover: "230 7% 16%",
          backgroundPressed: "223 7% 19%",
          backgroundDisabled: "230 7% 16%",
          backgroundSubtle: "0 0% 13%",
          backgroundSubtleHover: "240 7% 11%",
          backgroundSubtlePressed: "230 7% 16%",
          backgroundOverlay: "240 4% 10% / 70%",
          backgroundHighlight: "226 57% 21%",
          backgroundHighlightHover: "224 64% 33%",
          border: "223 7% 19%",
          borderStrong: "223 6% 22%",
          borderTransparent: "0 0% 100%",
          foreground: "220 9% 94%",
          foregroundMuted: "0 0% 71%",
          foregroundDisabled: "218 6% 26%",
          foregroundSubtle: "218 7% 70%",
        },
      },
    },
  },
];
