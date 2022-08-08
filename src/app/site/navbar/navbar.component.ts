import { Constantes } from './../../utils/constantes';
import { CookieService } from './../../utils/services/cookie.service';
import { DataService } from './../../utils/services/data.service';
import { Router } from '@angular/router';
import { JwtService } from './../../utils/services/jwt.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public jwt: JwtService,
    private router: Router,
    private data: DataService,
    private cookie: CookieService
  ) {}

  ngOnInit() {
    this.logoutThread();
  }

  async logoutThread() {
    await this.delay(5000);
    if (this.jwt.loggedIn()) {
      this.logoutThread();
    } else {
      this.jwt.clear();
      this.router.navigate(['home']);
    }
  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  openLoginDialog() {
    $('#login_modal').modal('show');
  }

  closeLoginDialog() {
    $('#login_modal').modal('hide');
  }

  toHome(): void {
    this.router.navigate(['home']);
  }

  toLogin(): void {
    this.router.navigate(['auth/login']);
  }
}
