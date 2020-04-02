import React from "react"
import * as utils from "./helper.js"

function Square(props) {
  const squareStyle = props.squareStyle

  return <button className={"square " + squareStyle} />
}

export default class Board extends React.Component {
  renderSquare(position, squareStyle) {
    return <Square key={position} squareStyle={squareStyle} />
  }

  render() {
    let renderBoard = []
    let renderColumns = []

    for (let position in this.props.boardState) {
      if (!this.props.boardState.hasOwnProperty(position)) {
        continue
      }

      const colNum = utils.getCol(this.props.columns, position)
      const rowNum = utils.getRow(position)

      const squareColor =
        (utils.is_Odd(colNum) && utils.is_Odd(rowNum)) ||
        (!utils.is_Odd(colNum) && !utils.is_Odd(rowNum))
          ? "white"
          : "black"

      let squareStyle = []

      squareStyle.push(position)
      squareStyle.push(squareColor)

      if (this.props.boardState[position] !== null) {
        squareStyle.push(this.props.boardState[position].player + " piece")
      }

      squareStyle = squareStyle.join(" ")

      renderColumns.push(this.renderSquare(position, squareStyle))

      if (renderColumns.length >= 8) {
        renderColumns = renderColumns.reverse()
        renderBoard.push(
          <div key={renderBoard.length} className="board-col">
            {renderColumns}
          </div>
        )
        renderColumns = []
      }
    }

    return renderBoard
  }
}
