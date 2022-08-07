import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  setCookie(cname: any, cvalue: any, exdays: any) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

  getCookie(cname: any) {
    const name = cname + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  checkCookie() {
    let user: any = this.getCookie('username');
    if (user !== '') {
      alert('Welcome again ' + user);
    } else {
      user = prompt('Please enter your name:', '');
      if (user !== '' && user != null) {
        this.setCookie('username', user, 365);
      }
    }
  }
}
