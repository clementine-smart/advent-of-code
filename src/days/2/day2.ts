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
  let score: number = 0
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

function formatInputStrategy2(input: string): number[][] {
  const games: string[][] = input.split(/\r?\n/).map((game) => {
    return game.split(' ')
  })
  return games.map((game) => {
   return game.map((hand) => {
    if (hand === 'A')
      return 1
    if (hand === 'B')
      return 2
    if (hand === 'C')
      return 3
    if (hand === 'X')
      return 0
    if (hand === 'Y')
      return 3
    return 6
   })
  })
}

function calculatePlay(games: number[][]): number[][]{
  return games.map((game) => {
      if (game[1] == 0 && game[0] !== 1)
        return [game[0], game[0] - 1]
      if (game[1] == 0 && game[0] === 1)
        return [game[0], 3]
      if (game[1] == 3)
        return [game[0], game[0]]
      if (game[1] == 6 && game[0] !== 3)
        return [game[0], game[0] + 1]
      return [game[0], 1]
    })
}

const strategy2: number[][] = formatInputStrategy2(input)
const strategy1Score: number = calculateMyScore(formatInput(input))
const strategy2Score: number = calculateMyScore(calculatePlay(strategy2))
console.log(strategy1Score)
console.log(strategy2Score)
