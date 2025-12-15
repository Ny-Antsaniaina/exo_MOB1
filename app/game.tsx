import { Audio } from "expo-av";
import { useEffect, useRef, useState } from "react";
import { Button, ScrollView, Vibration, View } from "react-native";
import Box from "./Box";
import generateBoard from "./generateBoard";
import { revealEmpty } from "./revealEmpty";
import { useSettings } from "./settings";

export default function Game() {
  const settings = useSettings();
  const [board, setBoard] = useState(() => generateBoard(settings.level));
  const [over, setOver] = useState(false);

  const soundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    const sound = new Audio.Sound();
    soundRef.current = sound;

    (async () => {
      await sound.loadAsync(require("../assets/music.mp3"));
      await sound.setIsLoopingAsync(true);
      await sound.setVolumeAsync(settings.volume);
      await sound.playAsync();
    })();

    return () => {
      sound.unloadAsync();
    };
  }, []);

  useEffect(() => {
    const updateVolume = async () => {
      if (!soundRef.current) return;

      const status = await soundRef.current.getStatusAsync();
      if (status.isLoaded) {
        await soundRef.current.setVolumeAsync(settings.volume);
      }
    };

    updateVolume();
  }, [settings.volume]);

  useEffect(() => {
    setBoard(generateBoard(settings.level));
    setOver(false);
  }, [settings.level]);

  const press = (x: number, y: number) => {
    if (over) return;

    const b = board.map((r) => r.map((c) => ({ ...c })));
    const cell = b[x][y];

    if (cell.revealed) return;

    if (cell.isBomb) {
      if (settings.vibration) Vibration.vibrate(500);
      setOver(true);
      b.flat().forEach((c) => (c.revealed = true));
    } else {
      if (cell.count === 0) {
        revealEmpty(b, x, y);
      } else {
        cell.revealed = true;
      }
    }

    setBoard(b);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1e1e1e",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView
        horizontal
        maximumZoomScale={2}
        minimumZoomScale={1}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View>
          {board.map((row, x) => (
            <View key={x} style={{ flexDirection: "row" }}>
              {row.map((cell, y) => (
                <Box key={y} x={x} y={y} cell={cell} onPress={press} />
              ))}
            </View>
          ))}

          {over && (
            <Button
              title="Recommencer"
              onPress={() => {
                setBoard(generateBoard(settings.level));
                setOver(false);
              }}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}
