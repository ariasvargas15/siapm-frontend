import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HomeComponent} from './home.component'
import {HeaderComponent} from './header/header.component'
import {RouterModule} from '@angular/router'
import {LoginComponent} from '../login/login.component'
import {TokenStorageService} from '../../services/token-storage.service'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {PensumComponent} from '../pensum/pensum.component'
import {MatSelectModule} from '@angular/material/select'

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
    FormsModule,
    MatSelectModule,
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
