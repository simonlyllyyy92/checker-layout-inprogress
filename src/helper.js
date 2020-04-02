export function is_Odd(n) {
  return Math.abs(n % 2) === 1
}

export function getCol(columns, coordinate) {
  return columns[coordinate.charAt(0)]
}

export function getRow(coordinate) {
  return parseInt(coordinate.charAt(1), 10)
}
