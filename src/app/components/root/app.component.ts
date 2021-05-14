import {Component, OnInit} from '@angular/core'
import {TokenStorageService} from '../../services/token-storage.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false
  username: string

  constructor(private tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken()
    if (this.isLoggedIn) {
      this.router.navigate(['/pensum']).then()
    } else {
      this.router.navigate(['/home'])
    }

  }
}
