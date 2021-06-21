import {Component, OnInit} from '@angular/core'
import {Pensum} from '../../models/pensum'
import {Semester} from '../../models/semester'
import {Subject} from '../../models/subject'
import {Notifications} from '../../utils/notification'
import {PensumService} from '../../services/pensum.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pensum: Pensum = new Pensum()
  subject: Subject = new Subject()

  constructor(private pensumService: PensumService) {
  }

  ngOnInit(): void {
    localStorage.clear()
    this.getPensum()
  }

  getPensum(): void {
    this.pensumService.getActivePensum()
      .subscribe({
        next: data => {
          this.pensum = data
        },
        error: error => {
          Notifications.showNotification(error.error, 'danger')
          console.log(error)
        }
      })
  }

  seeDetails(subject: Subject) {
    this.subject = subject
    const micro = subject.microcurriculums.find(value => value.id === subject.code)
    this.subject.content = micro.content
    console.log(micro)
    this.subject.bibliography = micro.bibliography
    this.subject.document = micro.document
  }
}
