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
  const seen = new Set([`${start[0]},${start[1]}`]);
  const parent = {};
  let steps = 0;

  while (queue.length > 0) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      const curr = queue.shift();
      const currKey = `${curr[0]},${curr[1]}`;

      if (curr[0] === target[0] && curr[1] === target[1]) {
        const path = [];
        let nodeKey = currKey;

        while (nodeKey) {
          const [x, y] = nodeKey.split(',').map(Number);
          path.push([x, y]);
          nodeKey = parent[nodeKey];
        }

        path.reverse();
        console.log(`You made it in ${steps} moves! Here's your path:`);
        path.forEach((node) => console.log(node));

        return { steps, path };
      }

      for (let move of moves) {
        const x = curr[0] + move[0];
        const y = curr[1] + move[1];
        const key = `${x},${y}`;

        if (x <= 7 && x >= 0 && y <= 7 && y >= 0 && !seen.has(key)) {
          seen.add(key);
          parent[key] = currKey;
          queue.push([x, y]);
        }
      }
    }

    steps++;
  }
}

knightMoves([0, 0], [6, 3]);
