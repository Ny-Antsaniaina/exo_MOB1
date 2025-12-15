import { create } from "zustand";

type Level = "easy" | "medium" | "hard";

type Settings = {
  volume: number;
  vibration: boolean;
  level: Level;

  setVolume: (v: number) => void;
  toggleVibration: () => void;
  setLevel: (l: Level) => void;
};

export const useSettings = create<Settings>((set) => ({
  volume: 1,
  vibration: true,
  level: "medium",

  setVolume: (volume) => set({ volume }),
  toggleVibration: () => set(s => ({ vibration: !s.vibration })),
  setLevel: (level) => set({ level }),
}));
