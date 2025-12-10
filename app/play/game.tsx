import { useState } from "react";
import { Button, Text, View } from "react-native";
import Box from "../page/Box";
import generateBoard from "../page/generateBoard";

export default function Game() {
  const [board, setBoard] = useState(generateBoard());
  const [gameOver, setGameOver] = useState(false);

  const handlePress = (x: number, y: number) => {
    if (gameOver) return;

    const newBoard = board.map(row => row.map(cell => ({ ...cell })));

    const revealCell = (x: number, y: number) => {
      const cell = newBoard[x][y];
      if (cell.revealed) return;

      cell.revealed = true;

      if (!cell.isBomb && cell.count === 0) {
        const directions = [
          [-1, -1], [-1, 0], [-1, 1],
          [0, -1],           [0, 1],
          [1, -1],  [1, 0],  [1, 1],
        ];

        for (const [dx, dy] of directions) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < newBoard.length && ny >= 0 && ny < newBoard[0].length) {
            revealCell(nx, ny);
          }
        }
      }
    };

    const cell = newBoard[x][y];

    if (cell.isBomb) {
      setGameOver(true);
      newBoard.forEach(row => row.forEach(c => (c.revealed = true)));
    } else {
      revealCell(x, y);
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
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Text style={{ color: "red", fontSize: 24, marginBottom: 10 }}>GAME OVER</Text>
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
