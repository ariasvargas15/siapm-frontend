import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import {Pensum} from '../../models/pensum'
import {PensumService} from '../../services/pensum.service'
import {Notifications} from '../../utils/notification'
import {ErrorStateMatcher} from '@angular/material/core'
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms'
import {Subject} from '../../models/subject'
import {SubjectService} from '../../services/subject.service'
import {FilesService} from '../../services/files.service'

class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
  }
}

declare const $: any

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
  subject: Subject = new Subject()
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
    credits: new FormControl('', [
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

  constructor(
    private pensumService: PensumService,
    private subjectService: SubjectService,
    private filesService: FilesService,
  ) {
  }

  ngOnInit(): void {
    localStorage.clear()
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
              $('#add').modal('hide')
              this.ngAddForm.reset()
              this.ngAddForm.resetForm()
              this.getPensum(this.pensum.code)
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

  seeDetails(subject: Subject) {
    this.subject = subject
    const micro = subject.microcurriculums.find(value => value.id === subject.code)
    this.subject.content = micro.content
    console.log(micro)
    this.subject.bibliography = micro.bibliography
    this.subject.document = micro.document
  }

  downloadMicrocurriculum(file: string) {
    this.filesService.getRequestFile(file)
      .subscribe({
          next: data => {
            const downloadURL = window.URL.createObjectURL(data)
            const link = document.createElement('a')
            link.href = downloadURL
            link.download = file
            link.click()
          },
          error: error => {
            Notifications.showNotification('Lo sentimos ha ocurrido un error obteniendo el archivo, probablemente esta corrupto', 'danger')
            console.log(error)
          }
        }
      )
  }
}
