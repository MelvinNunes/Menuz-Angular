import { JwtService } from '../../utils/services/jwt.service';
import { Router } from '@angular/router';
import { DataService } from '../../utils/services/data.service';
import { CookieService } from '../../utils/services/cookie.service';
import { Constantes } from '../../utils/constantes';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    remember_token: new FormControl(false),
  });

  error: any = {
    err: false,
    message: null,
    title: null,
  };

  constructor(
    private jwt: JwtService,
    private router: Router,
    private data: DataService,
    private cookie: CookieService,
    private title: Title
  ) {
    this.title.setTitle('Entrar');
  }

  ngOnInit() {}

  login() {
    this.jwt.login(this.form.value.email, this.form.value.password).subscribe(
      (res: any) => {
        this.jwt.setSession(res.access_token);
        if (this.form.value.remember_token) {
          this.cookie.setCookie(
            Constantes.CNAME,
            JSON.stringify({
              email: this.form.value.email,
              password: this.form.value.password,
            }),
            365
          );
        }
        this.data.setUser(this.jwt.getLoggedUtilizador());
        this.router.navigate(['site']);
      },
      (e: any) => {
        this.error.err = true;
        if (e.message == 'UNKNOWN USERNAME') {
          this.error.title = 'EMAIL INVÁLIDO';
          this.error.message =
            'Não existe nenhúm utilizador no sistema registado com esse Email.';
        } else if (e.message === 'INVALID PASSWORD') {
          this.error.title = 'SENHA INVÁLIDA';
          this.error.message = 'A senha introduzida não é válida.';
        } else if (e.message == 'USER NOT ACTIVE') {
          this.error.title = 'NÃO ACTIVO';
          this.error.message =
            'A conta do utlizador não está activa. Por favor contacte o administrador.';
        } else {
          this.error.title = 'ERRO INTERNO';
          this.error.message =
            'Erro interno ao efectuar o login. Por favor verifique a sua ligação. Contacte o Administrador.';
        }
      }
    );
  }
}
