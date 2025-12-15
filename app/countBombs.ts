export default function countBombs(board: any[][], x: number, y: number) {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1],
  ];

  let count = 0;
  const size = board.length;

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
      if (board[nx][ny].isBomb) count++;
    }
  }

  return count;
}
