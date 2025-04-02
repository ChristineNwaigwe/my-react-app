import { useState } from 'react';

function Square({ value, onSquareClick }) {
  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>);
}


export default function Board() {
  function handleClick(i) {
    const [squares, setSquares] = useState(Array(9).fill(null));
    return (
      <>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={handleClick} />
          <Square value={squares[0]} />
          <Square value={squares[1]} />
          <Square value={squares[2]} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} />
          <Square value={squares[4]} />
          <Square value={squares[5]} />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </>
    );
  }
}
