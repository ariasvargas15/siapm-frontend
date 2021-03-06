import {Microcurriculum} from './microcurriculum'

export class Subject {
  code: string
  name: string
  credits: number
  semester: number
  content: string
  bibliography: string
  document: string
  checked: boolean
  microcurriculums: Microcurriculum[]

  constructor() {
  }
}
