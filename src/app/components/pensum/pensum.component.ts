import {Component, OnInit} from '@angular/core'
import {Pensum} from '../../models/pensum'
import {PensumService} from '../../services/pensum.service'
import {Notifications} from '../../utils/notification'
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
  }
}

@Component({
  selector: 'app-pensum',
  templateUrl: './pensum.component.html',
  styleUrls: ['./pensum.component.css']
})
export class PensumComponent implements OnInit {

  pensum: Pensum = new Pensum()
  matcher = new MyErrorStateMatcher()

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
}
