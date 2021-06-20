import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {AdminLayoutRoutes} from './admin-layout.routing'
import {NgModule} from '@angular/core'
import {AuthGuardService} from '../../../services/authGuard.service'
import {AuthAdminService} from '../../../services/authAdminService'
import {PensumComponent} from '../../pensum/pensum.component'
import {AdminRequestsComponent} from '../../admin-requests/admin-requests.component'
import {MatFormFieldModule} from '@angular/material/form-field'
import {ReactiveFormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatTableModule} from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort'
import {PensumListComponent} from '../../pensum-list/pensum-list.component'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
  ],
  declarations: [
    PensumComponent,
    AdminRequestsComponent,
    PensumListComponent
  ],
  providers: [
    AuthGuardService,
    AuthAdminService
  ]
})

export class AdminLayoutModule {

}
