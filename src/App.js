import React from "react"

import Board from "./Board.js"

export class App extends React.Component {
  constructor(props) {
    super(props)

    this.columns = this.createColumns()

    this.state = {
      history: [
        {
          boardState: this.setupBoard(),
          currentPlayer: true
        }
      ]
    }
  }

  createColumns() {
    const columns = {}
    columns.a = 0
    columns.b = 1
    columns.c = 2
    columns.d = 3
    columns.e = 4
    columns.f = 5
    columns.g = 6
    columns.h = 7

    return columns
  }

  setupBoard() {
    let board = {}

    for (let key in this.columns) {
      if (this.columns.hasOwnProperty(key)) {
        for (let i = 1; i <= 8; ++i) {
          let row = key + i
          board[row] = null
        }
      }
    }

    board = this.initPlayersPosition(board)

    return board
  }

  initPlayersPosition(board) {
    const player1 = [
      "a8",
      "c8",
      "e8",
      "g8",
      "b7",
      "d7",
      "f7",
      "h7",
      "a6",
      "c6",
      "e6",
      "g6"
    ]
    const player2 = [
      "b3",
      "d3",
      "f3",
      "h3",
      "a2",
      "c2",
      "e2",
      "g2",
      "b1",
      "d1",
      "f1",
      "h1"
    ]

    let current = this

    player1.forEach(function(i) {
      board[i] = current.setupPiece(i, "player1")
    })

    player2.forEach(function(i) {
      board[i] = current.setupPiece(i, "player2")
    })

    return board
  }

  setupPiece(location, player) {
    let piece = {}

    piece.player = player
    piece.location = location

    return piece
  }

  render() {
    const columns = this.columns
    const stateHistory = this.state.history

    const currentState = stateHistory[0]
    const boardState = currentState.boardState

    //        console.log(this.state);

    return (
      <div className="reactCheckers">
        <div className="game-board">
          <Board boardState={boardState} columns={columns} />
        </div>
      </div>
    )
  }
}
