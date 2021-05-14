import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core'
import {TokenStorageService} from '../../services/token-storage.service'
import {Notifications} from '../../utils/notification'
import {AuthService} from '../../services/auth.service'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false
  isLoginFailed = false
  errorMessage = ''
  document = ''
  matcher = new MyErrorStateMatcher()
  hide = true

  formGroup = new FormGroup({
    document: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  })

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true
      this.document = this.tokenStorage.getUser().document
      this.router.navigate(['/']).then()
    }
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value)
      this.authService.login(this.formGroup.value).subscribe(
        data => {
          if (typeof data.message !== 'undefined') {
            Notifications.showNotification(data.message, 'info')
          } else {
            this.tokenStorage.saveToken(data.accessToken)
            this.tokenStorage.saveUser(data)
            this.isLoginFailed = false
            this.isLoggedIn = true
            this.document = this.tokenStorage.getUser().document
            this.reloadPage()
          }
        },
        err => {
          this.errorMessage = err.error.message
          Notifications.showNotification('Usuario o contraseña inválida', 'danger')
        }
      )
    }
  }

  reloadPage(): void {
    window.location.reload()
  }

}
