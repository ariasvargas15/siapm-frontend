import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './components/root/app.component'
import {RouterModule} from '@angular/router'
import {HomeModule} from './components/home/home.module'
import {AppRoutingModule} from './app.routing'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {TokenStorageService} from './services/token-storage.service'
import {AuthService} from './services/auth.service'
import {HttpClientModule} from '@angular/common/http'
import {LoginComponent} from './components/login/login.component'
import {CommonModule} from '@angular/common'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AdminLayoutComponent} from './components/layouts/admin-layout/admin-layout.component'
import {ComponentsModule} from './components/layouts/admin-layout/components.module'
import {AuthAdminService} from './services/authAdminService'
import {AuthGuardService} from './services/authGuard.service'
import {RequestComponent} from './components/request/request.component'
import {RegisterComponent} from './components/register/register.component'
import {PensumService} from './services/pensum.service'
import {RequestService} from './services/request.service'
import {FilesService} from './services/files.service';
import { PensumListComponent } from './components/pensum-list/pensum-list.component'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatTableModule} from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    RequestComponent,
    RegisterComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    HomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  providers: [
    TokenStorageService,
    AuthService,
    AuthGuardService,
    AuthAdminService,
    PensumService,
    RequestService,
    FilesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
