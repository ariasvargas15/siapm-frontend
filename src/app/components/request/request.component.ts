import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @ViewChild('labelImport')
  labelImport: ElementRef

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
  })

  fileToUpload: File = null

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ')
    this.fileToUpload = files.item(0)
  }

}
