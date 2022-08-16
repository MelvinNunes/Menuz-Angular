import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/utils/services/request.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any = [];

  form: any = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    surname: new FormControl(''),
    username: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.email, Validators.required]),
  });

  error: any = {
    err: false,
    message: null,
    title: null,
  };

  constructor(private request: RequestService) {}

  ngOnInit(): void {
    this.getusers();
  }

  adduser(): void {
    let user: any = {
      name: this.form.value.name,
      surname: this.form.value.surname,
      username: this.form.value.username,
      password: this.form.value.password,
    };
    this.request.post('user/add', user).subscribe(
      (res: any) => {
        console.log('sucess');
        this.getusers();
      },
      (e: any) => {}
    );
  }

  getusers(): void {
    this.request.get('user/get').subscribe(
      (res: any) => {
        this.users = res;
        console.log(res);
      },
      (err: any) => {}
    );
  }

  changeTabAdd(): void {
    const addContent = document.getElementById('add');
    const deleteContent = document.getElementById('delete');
    const allContent = document.getElementById('all');

    addContent?.classList.remove('hidden');
    deleteContent?.classList.add('hidden');
    allContent?.classList.add('hidden');
  }

  changeTabDelete(): void {
    const addContent = document.getElementById('add');
    const deleteContent = document.getElementById('delete');
    const allContent = document.getElementById('all');

    deleteContent?.classList.remove('hidden');
    addContent?.classList.add('hidden');
    allContent?.classList.add('hidden');
  }

  changeTabAll(): void {
    const addContent = document.getElementById('add');
    const deleteContent = document.getElementById('delete');
    const allContent = document.getElementById('all');

    allContent?.classList.remove('hidden');
    addContent?.classList.add('hidden');
    deleteContent?.classList.add('hidden');
  }
}
