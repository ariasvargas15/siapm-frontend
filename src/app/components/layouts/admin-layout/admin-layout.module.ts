import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {AdminLayoutRoutes} from './admin-layout.routing'
import {NgModule} from '@angular/core'
import {AuthGuardService} from '../../../services/authGuard.service'
import {AuthAdminService} from '../../../services/authAdminService'
import {PensumComponent} from '../../pensum/pensum.component'
import {AdminRequestsComponent} from '../../admin-requests/admin-requests.component'
import {AdminUsersComponent} from '../../admin-users/admin-users.component'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
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
