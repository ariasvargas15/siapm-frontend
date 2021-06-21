import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import {Pensum} from '../../models/pensum'
import {PensumService} from '../../services/pensum.service'
import {Notifications} from '../../utils/notification'
import {ErrorStateMatcher} from '@angular/material/core'
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms'
import {Subject} from '../../models/subject'
import {SubjectService} from '../../services/subject.service'

class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
  }
}

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  @ViewChild('labelDocument') labelDocument: ElementRef

  @ViewChild('formAdd') ngAddForm: NgForm

  pensums: Pensum[] = []
  pensum: Pensum = new Pensum()
  newSubject: Subject = new Subject()
  document: File = null
  matcher = new MyErrorStateMatcher()

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    code: new FormControl('', [
      Validators.required
    ]),
    semester: new FormControl('', [
      Validators.required
    ]),
    content: new FormControl('', [
      Validators.required
    ]),
    bibliography: new FormControl('', [
      Validators.required
    ]),
    document: new FormControl('', [
      Validators.required
    ]),

  })

  constructor(private pensumService: PensumService, private subjectService: SubjectService) {
  }

  ngOnInit(): void {
    localStorage.clear()
    this.getPensum()
  }

  getPensum(): void {
    this.pensumService.getAllPensums()
      .subscribe({
        next: data => {
          this.pensums = data
          this.pensum = this.pensums[0]
        },
        error: error => {
          Notifications.showNotification(error.error, 'danger')
          console.log(error)
        }
      })
  }

  addSubject() {
    this.ngAddForm.reset()
    this.ngAddForm.resetForm()
    this.newSubject = new Subject()
  }

  onUploadMicrocurriculum(files: FileList) {
    this.labelDocument.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ')
    this.document = files.item(0)
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.subjectService.saveSubject(this.pensum.code, this.newSubject, this.document)
        .subscribe({
            next: data => {
              this.ngAddForm.reset()
              this.ngAddForm.resetForm()
              Notifications.showNotification('Asignatura guardada correctamente', 'success')
            },
            error: error => {
              Notifications.showNotification('Ha ocurrido un error guardando la asignatura', 'danger')
              console.log(error)
            }
          }
        )
    }
  }
}
