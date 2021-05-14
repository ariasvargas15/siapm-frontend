import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HomeComponent} from './home.component'
import {HeaderComponent} from './header/header.component'
import {RouterModule} from '@angular/router'
import {LoginComponent} from '../login/login.component'
import {TokenStorageService} from '../../services/token-storage.service'
import {ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {PensumComponent} from '../pensum/pensum.component'

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: [

  ],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}
