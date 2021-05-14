import {Semester} from './semester'

export class Pensum {
  code: string
  isActive: boolean
  semesters: Semester[]

  constructor(code: string, isActive: boolean, semesters: Semester[]) {
    this.code = code
    this.isActive = isActive
    this.semesters = semesters
  }
}
