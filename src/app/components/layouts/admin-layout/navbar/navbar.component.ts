import {Component, ElementRef, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {TokenStorageService} from '../../../../services/token-storage.service'

declare var $: any

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mobileMenuVisible: any = 0
  editable = false
  title = 'Datos personales'
  private toggleButton: any
  private sidebarVisible: boolean

  constructor(private element: ElementRef, private router: Router,
              private tokenStorageService: TokenStorageService) {
    this.sidebarVisible = false
  }

  ngOnInit(): void {
    const navbar: HTMLElement = this.element.nativeElement
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0]
    this.router.events.subscribe((event) => {
      this.sidebarClose()
      const $layer: any = document.getElementsByClassName('close-layer')[0]
      if ($layer) {
        $layer.remove()
        this.mobileMenuVisible = 0
      }
    })
  }

  sidebarOpen(): void {
    const toggleButton = this.toggleButton
    const body = document.getElementsByTagName('body')[0]
    setTimeout(function(): void {
      toggleButton.classList.add('toggled')
    }, 500)

    body.classList.add('nav-open')

    this.sidebarVisible = true
  }

  sidebarClose(): void {
    const body = document.getElementsByTagName('body')[0]
    this.toggleButton.classList.remove('toggled')
    this.sidebarVisible = false
    body.classList.remove('nav-open')
  }

  sidebarToggle(): void {
    const $layer = document.createElement('div')
    const $toggle = document.getElementsByClassName('navbar-toggler')[0]
    console.log('gg' + $toggle)
    if (this.sidebarVisible === false) {
      this.sidebarOpen()
    } else {
      this.sidebarClose()
    }
    const body = document.getElementsByTagName('body')[0]

    if (this.mobileMenuVisible == 1) {
      body.classList.remove('nav-open')
      if ($layer) {
        $layer.remove()
      }
      setTimeout(function(): void {
        $toggle.classList.remove('toggled')
      }, 400)

      this.mobileMenuVisible = 0
    } else {
      setTimeout(function(): void {
        $toggle.classList.add('toggled')
      }, 430)

      $layer.setAttribute('class', 'close-layer')

      if (body.querySelectorAll('.main-panel')) {
        document.getElementsByClassName('main-panel')[0].appendChild($layer)
      } else if (body.classList.contains('off-canvas-sidebar')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer)
      }
      setTimeout(function(): void {
        $layer.classList.add('visible')
      }, 100)
      $layer.onclick = function(): void {
        body.classList.remove('nav-open')
        this.mobileMenuVisible = 0
        $layer.classList.remove('visible')
        setTimeout(function(): void {
          $layer.remove()
          $toggle.classList.remove('toggled')
        }, 400)
      }.bind(this)

      body.classList.add('nav-open')
      this.mobileMenuVisible = 1

    }
  }

  logout(): void {
    this.tokenStorageService.signOut()
    window.location.reload()
  }

  isMobileMenu(): boolean {
    return $(window).width() <= 991

  }


}
