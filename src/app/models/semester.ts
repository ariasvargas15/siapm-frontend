import {Subject} from './subject'

export class Semester {
  id: number
  subjects: Subject[]

  constructor(id: number, subjects: Subject[]) {
    this.id = id
    this.subjects = subjects
  }
}
