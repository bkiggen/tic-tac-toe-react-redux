import React from 'react';
import Board from './Board';
import './../index.css';
import { connect } from 'react-redux';


class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  handleClick(i) {
    const { dispatch } = this.props;
    const newXIsNext = this.props.xIsNext;
    console.log(this.props)
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = newXIsNext ? 'X' : 'O';
    const xIsNext = !newXIsNext;
    const action = {
      type: 'UPDATE_HISTORY',
      squares: squares,
      stepNumber: history.length,
      xIsNext: xIsNext
    };
    dispatch(action);
  }


  jumpTo(step) {
    const stepNumber = step;
    const xIsNext = (step % 2) === 0;
    const action = {
      type: 'JUMP_TO_STEP',
      step: step
    }
  }


  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>

          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    let image;
    if (winner) {
      status = 'Winner: ' + winner;
      image = <img src="https://media1.popsugar-assets.com/files/thumbor/VWlpDdHkG9Vv3KucGebNZ7Rmoso/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-:fill-!white!-/2015/11/03/052/n/1922283/d4c29d1dfdbe4062_tumblr_m8es1wCwGi1qg39ewo1_500/i/Jack-Frost.gif"/>;
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    }
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
        <div>{image}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.history,
    xIsNext: state.xIsNext,
    stepNumber: state.stepNumber
  };
};

export default connect(mapStateToProps)(Game);
