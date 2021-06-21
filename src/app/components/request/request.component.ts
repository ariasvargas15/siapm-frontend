import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms'
import {Request} from '../../models/request'
import {RequestService} from '../../services/request.service'
import {Notifications} from '../../utils/notification'

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @ViewChild('labelImport')
  labelImport: ElementRef

  @ViewChild('labelImport2')
  labelImport2: ElementRef

  @ViewChild('formRequest')
  ngRequestForm: NgForm

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    surname: new FormControl('', [
      Validators.required
    ]),
    document: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    code: new FormControl('', []),
    importFile: new FormControl('', [
      Validators.required
    ]),
    importCertificate: new FormControl('', [
      Validators.required
    ]),
  })

  request: Request = new Request()
  receipt: File = null
  certificate: File = null

  constructor(private requestService: RequestService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

  onUploadReceipt(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ')
    this.receipt = files.item(0)
  }

  onUploadCertificate(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ')
    this.certificate = files.item(0)
  }

  sendRequest() {
    if (this.formGroup.valid) {
      this.request.status = 'PENDIENTE'
      this.requestService.sendRequest(this.receipt, this.certificate, this.request)
        .subscribe({
            next: data => {
              this.ngRequestForm.reset()
              this.ngRequestForm.resetForm()
              Notifications.showNotification('Solicitud enviada correctamente', 'success')
            },
            error: error => {
              Notifications.showNotification(error.error, 'danger')
              console.log(error)
            }
          }
        )
    }
  }
}
