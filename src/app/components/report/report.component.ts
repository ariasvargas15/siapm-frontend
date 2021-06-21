import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Notifications} from '../../utils/notification'
import {PensumService} from '../../services/pensum.service'
import {Pensum} from '../../models/pensum'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  request: string
  name: string
  pensums: Pensum[] = []
  pensum: Pensum = new Pensum()

  constructor(private route: ActivatedRoute, private pensumService: PensumService) {
  }

  ngOnInit(): void {
    this.request = this.route.snapshot.paramMap.get('id')
    this.name = this.route.snapshot.paramMap.get('name')
    console.log(this.request)
    this.getPensum()
  }

  getPensum(code?: string): void {
    this.pensumService.getAllPensums()
      .subscribe({
        next: data => {
          this.pensums = data
          if (code === undefined) {
            this.pensum = this.pensums[0]
          } else {
            this.pensum = this.pensums.find(value => value.code === code)
          }
        },
        error: error => {
          Notifications.showNotification(error.error, 'danger')
          console.log(error)
        }
      })
  }


  generateReport() {
    const pensumFiltered: Pensum = new Pensum()
    pensumFiltered.semesters = this.pensum.semesters.filter(value => {
        return value.subjects.filter(value1 => {
          return value1.checked === true
        }).length > 0
      }
    )
    console.log(pensumFiltered)
  }
}
