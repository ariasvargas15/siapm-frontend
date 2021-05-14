import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router'
import {TokenStorageService} from './token-storage.service'


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private tokenStorage: TokenStorageService) {
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (!this.tokenStorage.getToken()) {
      alert('You are not allowed to view this page')
      this.router.navigate(['/login']).then()
    }
    return true
  }

}
