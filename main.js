function knightMoves(start, target) {
  if (!Array.isArray(start) || !Array.isArray(target)) {
    return 'Only arrays are accepted.';
  }

  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const queue = [start];
  const seen = new Set([`${start[0]}, ${start[1]}`]);
  let steps = 0;

  while (queue.length > 0) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      const curr = queue.shift();

      if (curr[0] === target[0] && curr[1] === target[1]) {
        return steps;
      }

      for (let move of moves) {
        const x = curr[0] + move[0];
        const y = curr[1] + move[1];
        const key = `${x}, ${y}`;
        if (x <= 7 && x >= 0 && y <= 7 && y >= 0 && !seen.has(key)) {
          seen.add(key);
          queue.push([x, y]);
        }
      }
    }

    steps++;
  }
}

console.log(knightMoves([0, 0], [6, 3]));
