import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {AdminLayoutRoutes} from './admin-layout.routing'
import {NgModule} from '@angular/core'
import {AuthGuardService} from '../../../services/authGuard.service'
import {AuthAdminService} from '../../../services/authAdminService'
import {PensumComponent} from '../../pensum/pensum.component'
import {AdminRequestsComponent} from '../../admin-requests/admin-requests.component'
import {AdminUsersComponent} from '../../admin-users/admin-users.component'
import {MatFormFieldModule} from '@angular/material/form-field'
import {ReactiveFormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  declarations: [
    PensumComponent,
    AdminRequestsComponent,
    AdminUsersComponent,
  ],
  providers: [
    AuthGuardService,
    AuthAdminService
  ]
})

export class AdminLayoutModule {

}
