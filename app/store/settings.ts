import { create } from "zustand";

type SettingsState = {
  volume: number;             
  vibrationEnabled: boolean;
  level: "easy" | "medium" | "hard";

  setVolume: (v: number) => void;
  toggleVibration: () => void;
  setLevel: (lvl: "easy" | "medium" | "hard") => void;
};

export const useSettings = create<SettingsState>((set) => ({
  volume: 1,
  vibrationEnabled: true,
  level: "medium",

  setVolume: (v) => set({ volume: v }),
  toggleVibration: () =>
    set((s) => ({ vibrationEnabled: !s.vibrationEnabled })),
  setLevel: (lvl) => set({ level: lvl }),
}));
