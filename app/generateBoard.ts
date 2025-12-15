import countBombs from "./countBombs";

const levels = {
  easy: { size: 10, bombs: 20 },
  medium: { size: 20, bombs: 40 },
  hard: { size: 30, bombs: 60 },
};

export default function generateBoard(level: "easy" | "medium" | "hard") {
  const { size, bombs } = levels[level];

  const board = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => ({
      isBomb: false,
      revealed: false,
      count: 0,
    }))
  );

  let placed = 0;
  while (placed < bombs) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);
    if (!board[x][y].isBomb) {
      board[x][y].isBomb = true;
      placed++;
    }
  }

  for (let i = 0; i < size; i++)
    for (let j = 0; j < size; j++)
      if (!board[i][j].isBomb)
        board[i][j].count = countBombs(board, i, j);

  return board;
}
