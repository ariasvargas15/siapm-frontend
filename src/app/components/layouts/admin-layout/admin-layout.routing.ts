import {Routes} from '@angular/router'
import {PensumComponent} from '../../pensum/pensum.component'
import {AuthGuardService} from '../../../services/authGuard.service'
import {AdminRequestsComponent} from '../../admin-requests/admin-requests.component'
import {AuthAdminService} from '../../../services/authAdminService'
import {PensumListComponent} from '../../pensum-list/pensum-list.component'
import {SubjectsComponent} from '../../subjects/subjects.component'

export const AdminLayoutRoutes: Routes = [

  {path: 'active', component: PensumComponent, canActivate: [AuthGuardService]},
  {path: 'requests', component: AdminRequestsComponent, canActivate: [AuthGuardService, AuthAdminService]},
  {path: 'pensums', component: PensumListComponent, canActivate: [AuthGuardService, AuthAdminService]},
  {path: 'subjects', component: SubjectsComponent, canActivate: [AuthGuardService, AuthAdminService]},

]
