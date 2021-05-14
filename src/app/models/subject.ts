export class Subject {
  code: string
  name: string
  credits: number

  constructor(code: string, name: string, credits: number) {
    this.code = code
    this.name = name
    this.credits = credits
  }
}
