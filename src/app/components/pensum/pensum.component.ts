import { Component, OnInit } from '@angular/core';
import {Pensum} from '../../models/pensum'
import {Semester} from '../../models/semester'
import {Subject} from '../../models/subject'

@Component({
  selector: 'app-pensum',
  templateUrl: './pensum.component.html',
  styleUrls: ['./pensum.component.css']
})
export class PensumComponent implements OnInit {

  pensum: Pensum

  constructor() {
  }

  ngOnInit(): void {
    localStorage.clear()
    this.getPensum()
  }

  getPensum(): void {
    this.pensum = new Pensum(
      '1155', true, [
        new Semester(
          1, [
            new Subject('1155101', 'Fundamentos de programacion', 2),
            new Subject('1155102', 'Programacion orientada a objetos', 2),
            new Subject('1155103', 'Calculo diferencial', 2),
            new Subject('1155104', 'Intro a vida universitaria', 2),
          ]
        ),
        new Semester(
          2, [
            new Subject('1155101', 'Fundamentos de programacion', 2),
            new Subject('1155102', 'Programacion orientada a objetos', 2),
            new Subject('1155103', 'Calculo diferencial', 2),
            new Subject('1155104', 'Intro a vida universitaria', 2),
            new Subject('1155104', 'Fisica mecanica', 2),
          ]
        ),
        new Semester(
          3, [
            new Subject('1155101', 'Fundamentos de programacion', 2),
            new Subject('1155102', 'Programacion orientada a objetos', 2),
            new Subject('1155103', 'Calculo diferencial', 2),
            new Subject('1155104', 'Intro a vida universitaria', 2),
            new Subject('1155104', 'Fisica mecanica', 2),
          ]
        ),
        new Semester(
          4, [
            new Subject('1155101', 'Fundamentos de programacion', 2),
            new Subject('1155102', 'Programacion orientada a objetos', 2),
            new Subject('1155103', 'Calculo diferencial', 2),
            new Subject('1155104', 'Intro a vida universitaria', 2),
            new Subject('1155104', 'Fisica mecanica', 2),
            new Subject('1155104', 'Fisica mecanica', 2),
            new Subject('1155104', 'Fisica mecanica', 2),
          ]
        ),
        new Semester(
          5, [
            new Subject('1155101', 'Fundamentos de programacion', 2),
            new Subject('1155102', 'Programacion orientada a objetos', 2),
            new Subject('1155103', 'Calculo diferencial', 2),
            new Subject('1155104', 'Intro a vida universitaria', 2),
            new Subject('1155104', 'Fisica mecanica', 2),
            new Subject('1155104', 'Fisica mecanica', 2),
            new Subject('1155104', 'Fisica mecanica', 2),
          ]
        ),
        new Semester(
          6, [
            new Subject('1155101', 'Fundamentos de programacion', 2),
            new Subject('1155102', 'Programacion orientada a objetos', 2),
            new Subject('1155103', 'Calculo diferencial', 2),
            new Subject('1155104', 'Intro a vida universitaria', 2),
            new Subject('1155104', 'Intro a vida universitaria', 2),
          ]
        ),
        new Semester(
          7, [
            new Subject('1155101', 'Fundamentos de programacion', 2),
            new Subject('1155102', 'Programacion orientada a objetos', 2),
            new Subject('1155103', 'Calculo diferencial', 2),
            new Subject('1155104', 'Intro a vida universitaria', 2),
            new Subject('1155104', 'Fisica mecanica', 2),
          ]
        ),
        new Semester(
          8, [
            new Subject('1155101', 'Fundamentos de programacion', 2),
            new Subject('1155102', 'Programacion orientada a objetos', 2),
            new Subject('1155103', 'Calculo diferencial', 2),
            new Subject('1155104', 'Intro a vida universitaria', 2),
            new Subject('1155104', 'Fisica mecanica', 2),
          ]
        ),
        new Semester(
          9, [
            new Subject('1155101', 'Fundamentos de programacion', 2),
            new Subject('1155102', 'Programacion orientada a objetos', 2),
            new Subject('1155103', 'Calculo diferencial', 2),
            new Subject('1155103', 'Calculo diferencial', 2),
            new Subject('1155103', 'Calculo diferencial', 2),
            new Subject('1155104', 'Intro a vida universitaria', 2),
            new Subject('1155104', 'Fisica mecanica', 2),
          ]
        ),
        new Semester(
          10, [
            new Subject('1155101', 'Fundamentos de programacion', 2),
            new Subject('1155102', 'Programacion orientada a objetos', 2),
            new Subject('1155103', 'Calculo diferencial', 2),
            new Subject('1155104', 'Intro a vida universitaria', 2),
            new Subject('1155104', 'Fisica mecanica', 2),
          ]
        )
      ]
    )
  }
}
