import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Constantes } from 'src/app/utils/constantes';
import { CookieService } from 'src/app/utils/services/cookie.service';
import { JwtService } from 'src/app/utils/services/jwt.service';
import { RequestService } from 'src/app/utils/services/request.service';
import { DataService } from '../../utils/services/data.service';
declare var $: any;

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css'],
})
export class LogonComponent implements OnInit {
  form: any = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    surname: new FormControl(''),
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  error: any = {
    err: false,
    message: null,
    title: null,
  };

  constructor(
    private Title: Title,
    private jwt: JwtService,
    private data: DataService,
    private cookie: CookieService,
    private router: Router,
    private request: RequestService
  ) {
    this.Title.setTitle('Criar Conta');
  }

  ngOnInit(): void {}

  logon(): void {
    let user: any = {
      name: this.form.value.name,
      surname: this.form.value.surname,
      username: this.form.value.username,
      password: this.form.value.password,
    };
    this.request.post('user/add', user).subscribe(
      (res: any) => {
        this.jwt
          .login(this.form.value.email, this.form.value.password)
          .subscribe(
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
            (e: any) => {}
          );
      },
      (e: any) => {
        this.error.err = true;
        if (e.message == 'NAME NULL') {
          this.error.title = 'NAME NULL';
          this.error.message = 'Por Favor preencha o campo de nome.';
        } else if (e.message == 'USERNAME NULL') {
          this.error.title = 'USERNAME NULL';
          this.error.message = 'Por Favor preencha o campo de nome de usuário.';
        } else if (e.message == 'PASSWORD NULL') {
          this.error.title = 'PASSWORD NULL';
          this.error.message =
            'Por favor, o campo de passowrd não deve estar vazio.';
        } else {
          this.error.title = 'DUPLICATED USER';
          this.error.message = 'O usúario já existe.';
        }
      }
    );
  }
}
