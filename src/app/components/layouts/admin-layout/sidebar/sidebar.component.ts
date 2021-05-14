import {Component, OnInit} from '@angular/core'
import {TokenStorageService} from '../../../../services/token-storage.service'

declare const $: any

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/pensum', title: 'Pensum', icon: 'description', class: ''},
 /* {path: '/plan', title: 'Planes Estratégicos', icon: 'landscape', class: ''},
  {path: '/eje', title: 'Ejes Estratégicos', icon: 'call_split', class: ''},
  {path: '/objetivo', title: 'Objetivos', icon: 'content_paste', class: ''},
  {path: '/proceso', title: 'Procesos', icon: 'linear_scale', class: ''},
  {path: '/meta', title: 'Metas', icon: 'fact_check', class: ''},
  {path: '/indicador', title: 'Indicadores', icon: 'assessment', class: ''},
  {path: '/indicador-periodo-avance', title: 'Indicadores Periodo Avance', icon: 'trending_flat', class: ''},
  {path: '/indicador-periodo-cambio', title: 'Indicadores Periodo Cambio', icon: 'swap_horiz', class: ''},
  {path: '/gestion', title: 'Gestion de usuarios', icon: 'account_circle', class: 'admin'},*/
]


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[]

  panelOpenState = false

  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    let permissions = ''
    const user = this.tokenStorageService.getUser()
    if (user.roles == 'ROLE_ADMIN') {
      permissions = 'admin'
    }
    this.menuItems = ROUTES.filter(
      menuItem => {
        if (permissions === 'admin') {
          return true
        } else {
          return permissions === menuItem.class
        }
      }
    )

  }

  isMobileMenu(): boolean {
    return $(window).width() <= 991
  }

  Logout(): void {
    this.tokenStorageService.signOut()
    window.location.reload()
  }
}
