import {readFileSync} from 'node:fs'
import path from 'path'

export function getInput(currentDir: string, day: string): string {
  const inputPath: string = path.join(currentDir, '..', '..', '..', 'src', 'days', day, `day${day}.txt`)
  return readFileSync(inputPath, 'utf8')
}