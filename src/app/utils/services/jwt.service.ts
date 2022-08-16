import {
  Constantes,
  ALLOWED_ROLES,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
} from './../constantes';
import { CookieService } from './cookie.service';
import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor(
    private request: RequestService,
    private router: Router,
    private cookie: CookieService,
    public jwtHelper: JwtHelperService
  ) {}

  login(email: string, password: string) {
    localStorage.clear();
    return this.request.post('auth/login', {
      username: email,
      password: password,
    });
  }

  register(email: string, password: string) {
    return this.request
      .post('auth/login', { email, password })
      .subscribe(() => {
        this.login(email, password);
      });
  }

  logout() {
    this.request.post('auth/logout', {}).subscribe(
      () => {
        this.clear();
      },
      () => {
        this.clear();
      },
      () => {
        this.clear();
      }
    );
  }

  clear() {
    localStorage.clear();
    this.cookie.setCookie(Constantes.CNAME, null, 0);
    this.router.navigate(['login']);
  }

  loggedIn(): boolean {
    try {
      let f: any = localStorage.getItem(ACCESS_TOKEN);
      this.assertAlive(this.jwtHelper.decodeToken(f));
      return true;
    } catch (error) {
      return false;
    }
  }

  setSession(token: any) {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  getLoggedUtilizador(): any {
    let f: any = localStorage.getItem(ACCESS_TOKEN);
    console.log(f);
    return this.jwtHelper.decodeToken(f);
  }

  setLoggedUtilizador(data: any): any {
    localStorage.setItem(ACCESS_TOKEN, data);
  }

  /* Check via module id if a user has acesso to model*/
  hasAcess(role: any) {
    try {
      for (const m of this.getLoggedUtilizador().typeUser) {
        if (m.role == role) {
          return true;
        }
      }
    } catch (ex) {
      return false;
    }
    return false;
  }

  /* Check if a user logged has acesso to especific project*/
  hasAcessToProject(projectUUID: any) {
    const user: any = this.getLoggedUtilizador();
    try {
      for (const p of user.projects_) {
        if (p.uuid === projectUUID) {
          return true;
        }
      }
    } catch (ex) {
      return false;
    }
    return false;
  }

  /* Check if a user logged has acesso to any project*/
  hasAcessToAnyProject() {
    const user: any = this.getLoggedUtilizador();
    try {
      if (user.projects_.length > 0) {
        return true;
      }
    } catch (ex) {
      return false;
    }
    return false;
  }

  /* Check if a user have at least one role alowed in the model*/
  hasAcessToMudule(token: any) {
    const user = this.jwtHelper.decodeToken(token);
    try {
      for (const m of user.acessos) {
        if (ALLOWED_ROLES.includes(m.role)) {
          return true;
        }
      }
    } catch (ex) {
      return false;
    }
    return false;
  }

  assertAlive(decoded: any) {
    const now = Date.now().valueOf() / 1000;
    if (typeof decoded.exp != 'undefined' && decoded.exp < now) {
      throw new Error(`token expired: ${JSON.stringify(decoded)}`);
    }
    if (typeof decoded.nbf != 'undefined' && decoded.nbf > now) {
      throw new Error(`token expired: ${JSON.stringify(decoded)}`);
    }
  }
}
