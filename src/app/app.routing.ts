import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './components/home/home.component'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {BrowserModule} from '@angular/platform-browser'
import {LoginComponent} from './components/login/login.component'
import {AdminLayoutComponent} from './components/layouts/admin-layout/admin-layout.component'
import {RequestComponent} from './components/request/request.component'
import {RegisterComponent} from './components/register/register.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'request', component: RequestComponent},
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('src/app/components/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    },
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [],
})
export class AppRoutingModule {
}
