import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router'
import {TokenStorageService} from './token-storage.service'

@Injectable()
export class AuthAdminService implements CanActivate {

  constructor(private router: Router, private tokenStorage: TokenStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    const user = this.tokenStorage.getUser()
    if (user.role != 'ROLE_ADMIN') {
      this.router.navigate(['/']).then()
    }
    return true
  }

}
