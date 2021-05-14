import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {AuthService} from '../../services/auth.service'
import {Notifications} from '../../utils/notification'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true
  isSuccessful = false
  isSignUpFailed = false
  errorMessage = ''

  formGroup = new FormGroup({
    document: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    code: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
  })

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.authService.register(this.formGroup.value).subscribe(
        data => {
          this.isSuccessful = true
          this.isSignUpFailed = false
          Notifications.showNotification(data.message, 'success')
        },
        err => {
          this.errorMessage = err.error.message
          this.isSignUpFailed = true
          Notifications.showNotification(this.errorMessage, 'danger')
        }
      )
    }
  }

}
