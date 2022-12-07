import { getInput } from '../../utils'

const input: string = getInput(__dirname, '3')

function identifyRucksacks(input: string): string[] {
  return input.split(/\r?\n/)
}

function findDuplicateInCompartments(rucksack: string) {
  const compartmentA: string[] = [...rucksack.slice(0, rucksack.length/2)]
  const compartmentB: string[] = [...rucksack.slice(rucksack.length/2)]
  let duplicate: string = ''
  for (let i = 0; i < compartmentA.length; i++) {
    if (compartmentB.includes(compartmentA[i])) {
      duplicate = compartmentA[i]
    }
  }
  return duplicate
}

function sumDuplicates(rucksacks: string[]): number {
  const duplicates: string[] = rucksacks.map((rucksack) => findDuplicateInCompartments(rucksack))
  let count: number = 0
  for (let i = 0; i < duplicates.length; i++) {
    if (duplicates[i].match(/[a-z]/)) {
      count = count + (duplicates[i].charCodeAt(0) - 96)
    }
    if (duplicates[i].match(/[A-Z]/)) {
      count = count + (duplicates[i].charCodeAt(0) - 38)
    }
  }
  return count
}

const rucksacks = identifyRucksacks(input)

const check = findDuplicateInCompartments(rucksacks[0])

console.log(check)

console.log(sumDuplicates(identifyRucksacks(input)))