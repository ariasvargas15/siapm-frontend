import {Routes} from '@angular/router'
import {PensumComponent} from '../../pensum/pensum.component'
import {AuthGuardService} from '../../../services/authGuard.service'
import {AuthAdminService} from '../../../services/authAdminService'
import {AdminRequestsComponent} from '../../admin-requests/admin-requests.component'
import {AdminUsersComponent} from '../../admin-users/admin-users.component'

export const AdminLayoutRoutes: Routes = [

  {path: 'pensum', component: PensumComponent, canActivate: [AuthGuardService]},
  {path: 'requests', component: AdminRequestsComponent, canActivate: [AuthGuardService, AuthGuardService]},
  {path: 'users', component: AdminUsersComponent, canActivate: [AuthGuardService, AuthAdminService]},
  /*  {
        path: '',
        children: [{
            path: 'userprofile',
            component: UserProfileComponent
        }]
    },

    {path: 'gestion', component: GestionComponent, canActivate: [AuthGuardService, AuthAdminService]},
    {path: 'import-error', component: ImportComponent, canActivate: [AuthGuardService]},
    {path: 'plan', component: PlanComponent, canActivate: [AuthGuardService]},
    {path: 'eje', component: EjeComponent, canActivate: [AuthGuardService]},
    {path: 'objetivo', component: ObjetivoComponent, canActivate: [AuthGuardService]},
    {path: 'proceso', component: ProcesoComponent, canActivate: [AuthGuardService]},
    {path: 'meta', component: MetaComponent, canActivate: [AuthGuardService]},
    {path: 'indicador', component: IndicadorComponent, canActivate: [AuthGuardService]},
    {path: 'indicador-periodo-avance', component: IndicadorPeriodoAvanceComponent, canActivate: [AuthGuardService]},
    {path: 'indicador-periodo-cambio', component: IndicadorPeriodoCambioComponent, canActivate: [AuthGuardService]},*/

]
