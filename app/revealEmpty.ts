export function revealEmpty(board: any[][], x: number, y: number) {
  const size = board.length;
  const stack = [[x, y]];

  while (stack.length) {
    const [cx, cy] = stack.pop()!;
    const cell = board[cx][cy];

    if (cell.revealed) continue;

    cell.revealed = true;

    if (cell.count === 0) {
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const nx = cx + dx;
          const ny = cy + dy;

          if (
            nx >= 0 &&
            nx < size &&
            ny >= 0 &&
            ny < size &&
            !board[nx][ny].isBomb
          ) {
            stack.push([nx, ny]);
          }
        }
      }
    }
  }
}
