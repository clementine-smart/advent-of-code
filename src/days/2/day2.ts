import { getInput } from '../../utils'

const input: string = getInput(__dirname, '2')

function formatInput(input: string): number[][] {
  const games: string[][] = input.split(/\r?\n/).map((game) => {
    return game.split(' ')
  })
  return games.map((game) => {
   return game.map((hand) => {
    if (hand === 'A' || hand === 'X')
      return 1
    if (hand === 'B' || hand === 'Y')
      return 2
    if (hand === 'C' || hand === 'Z')
      return 3
    return 0
   })
  })
}

function calculateWinner(numberedGames: number[]): number {
  if (numberedGames[0] + 1 === numberedGames[1] || numberedGames[0] - 2 === numberedGames[1]) 
    return 6
  if (numberedGames[0] === numberedGames[1])
    return 3
  return 0
}

function calculateMyScore(allGames: number[][]): number {
  let score = 0
  allGames.map((game) => {
    if (calculateWinner(game) === 6)
      return score = score + game[1] + 6
    if (calculateWinner(game) === 3)
      return score = score + game[1] + 3
    if (calculateWinner(game) === 0)
      return score = score + game[1]
    return 0
  })
  return score
}

console.log(calculateMyScore(formatInput(input)))