import { getInput } from '../../utils'

const input: string = getInput(__dirname, '6')

function findMarker(input: string, startOfPack: number) {
  const signals: string[] = input.split('')
  let testSignals: string[] = []
  let count: number = 0
  let marker: number = 0
  for (let i = 0; i < signals.length; i++) {
    testSignals = signals.slice(i, i + startOfPack)
    for (let j = 0; j < startOfPack; j++) {
      if (testSignals.filter((signal) => signal == signals[i + j]).length <= 1) {
        count++
        if (count === startOfPack) {
          marker = i + startOfPack
          return marker
        }
      }
    } 
    count = 0
  }
  return marker
}

const marker = findMarker(input, 14)

console.log(marker)