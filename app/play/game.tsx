import { useState } from "react";
import { Button, Text, View } from "react-native";
import Box from "../page/Box";
import generateBoard from "../page/generateBoard";

export default function Game() {
  const [board, setBoard] = useState(generateBoard());
  const [gameOver, setGameOver] = useState(false);

  const handlePress = (x: number, y: number) => {
    if (gameOver) return;

    const newBoard = board.map(row => row.slice());
    const cell = newBoard[x][y];

    cell.revealed = true;

    if (cell.isBomb) {
      setGameOver(true);
      newBoard.forEach(row => row.forEach(c => (c.revealed = true)));
    }

    setBoard(newBoard);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 40,
      }}
    >
      {board.map((row, x) => (
        <View key={x} style={{ flexDirection: "row" }}>
          {row.map((cell, y) => (
            <Box key={`${x}-${y}`} x={x} y={y} cell={cell} onPress={handlePress} />
          ))}
        </View>
      ))}

      {gameOver && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "red", fontSize: 20 }}>GAME OVER</Text>
          <Button
            title="Recommencer"
            onPress={() => {
              setBoard(generateBoard());
              setGameOver(false);
            }}
          />
        </View>
      )}
    </View>
  );
}
