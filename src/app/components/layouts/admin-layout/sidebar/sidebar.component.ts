import {Component, OnInit} from '@angular/core'
import {TokenStorageService} from '../../../../services/token-storage.service'

declare const $: any

declare interface RouteInfo {
  path: string
  title: string
  icon: string
  class: string
}

export const ROUTES: RouteInfo[] = [
  {path: '/active', title: 'Pensum activo', icon: 'description', class: ''},
  {path: '/subjects', title: 'Asignaturas', icon: 'menu_book', class: 'admin'},
  {path: '/pensums', title: 'Pensums', icon: 'list', class: 'admin'},
  {path: '/requests', title: 'Solicitudes', icon: 'question_answer', class: 'admin'},
]


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[]

  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    let permissions = ''
    const user = this.tokenStorageService.getUser()
    if (user.role === 'ROLE_ADMIN') {
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
