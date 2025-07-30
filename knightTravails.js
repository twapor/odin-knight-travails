const knightOffset = [
[2, 1], [2, -1],
[-2, 1], [-2, -1],
[1, 2], [1, -2],
[-1, 2], [-1, -2]];



const isValidPosition = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;
function getPossibleMoves([x, y]) {
  return knightOffset
    .map(([dx, dy]) => [x + dx, y + dy])
    .filter(([nx, ny]) => isValidPosition(nx, ny));
}

function knightMoves(start, end) {
    const queue = [[start, [start]]];
    const visited = new Set();
    visited.add(start.toString());

  while (queue.length > 0) {
    const [pos, path] = queue.shift();

    if (pos[0] === end[0] && pos[1] === end[1]) {
      printKnightPath(path);
    }

    const nextMoves = getPossibleMoves(pos);
    for (const move of nextMoves) {
      const key = move.toString();
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([move, [...path, move]]);
      }
    }
  }

  return null; // no path found (shouldn’t happen)
}

function printKnightPath(path) {
  if (!path) {
    console.log("No path found!");
    return;
  }

  console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);

  for (const square of path) {
    console.log(`[${square[0]},${square[1]}]`);
  }
}

export default knightMoves;