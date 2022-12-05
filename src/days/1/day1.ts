import { getInput } from "../../utils"

const input = getInput(__dirname, '1')

function calculateCalories(input: string): number {
  const caloriesInput: string[] =  input.split(/\r?\n/)
  const calories = caloriesInput.map((calorie) => {
    return Number(calorie)
  })
  let temp: number = 0
  let highest: number = 0
  for (let i = 0; i < calories.length; i++){
    if(calories[i] !== 0) {
      temp = temp + calories[i]
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

console.log(calculateCalories(input))

