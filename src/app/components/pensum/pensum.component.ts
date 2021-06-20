import {Component, OnInit, ViewChild} from '@angular/core'
import {Pensum} from '../../models/pensum'
import {PensumService} from '../../services/pensum.service'
import {Notifications} from '../../utils/notification'
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core'
import {Subject} from '../../models/subject'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
  }
}

declare const $: any

@Component({
  selector: 'app-pensum',
  templateUrl: './pensum.component.html',
  styleUrls: ['./pensum.component.css']
})
export class PensumComponent implements OnInit {

  @ViewChild('formAdd') ngAddForm: NgForm

  pensum: Pensum = new Pensum()
  newPensum: Pensum = new Pensum()
  newSubject: Subject = new Subject()
  matcher = new MyErrorStateMatcher()

  addForm = new FormGroup({
    code: new FormControl('', [
      Validators.required,
    ]),
    career: new FormControl('', [
      Validators.required,
    ]),
  })


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

  addPensum() {
    this.ngAddForm.reset()
    this.ngAddForm.resetForm()
    this.newPensum = new Pensum()
  }

  save() {
    if (this.addForm.valid) {
      console.log(this.newPensum)
      this.pensumService.createPensum(this.newPensum)
        .subscribe({
          next: data => {
            $('#add').modal('hide')
            Notifications.showNotification('Pensum creado correctamente', 'success')
          },
          error: error => {
            Notifications.showNotification(error.error, 'danger')
            console.log(error.toString())
          }
        })
    }
  }
}
