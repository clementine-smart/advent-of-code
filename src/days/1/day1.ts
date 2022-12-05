import { getInput } from "../../utils"

const input = getInput(__dirname, '1')

function splitCalories(input: string): number[] {
  const caloriesInput: string[] =  input.split(/\r?\n/)
  const calories = caloriesInput.map((calorie) => {
    return Number(calorie)
  })
  return calories
}

function calculateHighestCalories(input: number[]): number {
  let temp: number = 0
  let highest: number = 0
  for (let i = 0; i < input.length; i++){
    if(input[i] !== 0) {
      temp = temp + input[i]
    } else {
      if(temp > highest) {
        highest = temp
        temp = 0
      }
      temp = 0
    }
  }
  return highest
}

function calculate3HighestCalories(input: number[]): number {
  let temp: number = 0
  let highest: number[] = [0, 0, 0]
  for (let i = 0; i < input.length; i++){
    if(input[i] !== 0) {
      temp = temp + input[i]
    } else {
      if(temp > Math.min(...highest)) {
        const lowest = highest.findIndex((calorie) => calorie == Math.min(...highest))
        highest[lowest] = temp
        temp = 0
      }
      temp = 0
    }
  }
  return highest.reduce((a, b) => a + b)
}

console.log(calculateHighestCalories(splitCalories(input)))
console.log(calculate3HighestCalories(splitCalories(input)))

