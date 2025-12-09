import countBombs from "./countBombs";

export default function generateBoard() {
  const size = 20;
  const bombs = 40;

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

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (!board[i][j].isBomb) {
        board[i][j].count = countBombs(board, i, j);
      }
    }
  }

  return board;
}
