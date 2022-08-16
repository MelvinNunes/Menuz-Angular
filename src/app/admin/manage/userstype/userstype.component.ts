import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/utils/services/request.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userstype',
  templateUrl: './userstype.component.html',
  styleUrls: ['./userstype.component.css'],
})
export class UserstypeComponent implements OnInit {
  roles: any = [];

  form: any = new FormGroup({
    role: new FormControl('', [Validators.minLength(2), Validators.required]),
  });

  constructor(private request: RequestService) {}

  ngOnInit(): void {
    this.getroles();
  }

  addrole(): void {
    let role: any = {
      role: this.form.value.role,
    };

    this.request.post('usertype/add', role).subscribe(
      (res: any) => {
        console.log('sucess');
        this.getroles();
      },
      (err: any) => {}
    );
  }

  getroles(): void {
    let role: any = {
      role: this.form.value.role,
    };

    this.request.get('usertype/get').subscribe(
      (res: any) => {
        this.roles = res;
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
