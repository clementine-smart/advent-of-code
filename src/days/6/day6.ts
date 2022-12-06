import { getInput } from '../../utils'

const input: string = getInput(__dirname, '6')

function findMarker(input: string) {
  const markStart = input.split('').map((letter, i, arr) => {
    if (letter !== arr[i + 1] && letter !== arr[i + 2] && arr[i + 1] !== arr[i + 2] && letter !== arr[i + 3] && arr[i + 1] !== arr[i + 3] && arr[i + 2] !== arr[i + 3]) {
      return i + 4
    }
   return letter
  })
  return markStart.find((letter) => {
    return typeof letter == 'number'
  })
}

const marker = findMarker(input)

console.log(marker)