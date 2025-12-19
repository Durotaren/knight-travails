# Knight’s Travails (JavaScript) ♞

A JavaScript solution to the Knight’s Travails problem using graph traversal.  
This project focuses on applying **Breadth-First Search (BFS)** to compute the shortest path a knight can take on a standard 8×8 chessboard.

---

## Overview

The chessboard is modeled as an **implicit graph**, where each square represents a node and each legal knight move represents an edge. Using BFS guarantees that the first time the target square is reached, the path found is the shortest possible.

The implementation calculates both the **minimum number of moves** and the **exact path** taken by the knight.

---

## Knight Movement Rules

- A knight moves in an L-shape: two squares in one direction and one perpendicular
- Movement is allowed in all directions
- Moves that go off the board are not permitted

---

## Function

### `knightMoves(start, target)`

Determines the shortest path between two squares on the board.

- `start` — `[x, y]` starting position
- `target` — `[x, y]` target position
- Coordinates must be integers between `0` and `7`

---

## Implementation Details

- Breadth-First Search (BFS) is used to traverse the board
- A queue manages level-by-level traversal
- A `Set` tracks visited positions to prevent revisits
- A parent map stores the previous square for each move, enabling path reconstruction

---

## Algorithm Characteristics

- **Search Algorithm:** Breadth-First Search (BFS)
- **Time Complexity:** O(1) — limited to 64 squares
- **Space Complexity:** O(64)

---

## Notes

- Multiple shortest paths may exist
- This project is console-based and does not include a graphical interface
