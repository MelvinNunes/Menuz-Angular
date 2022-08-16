import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/utils/services/request.service';

@Component({
  selector: 'app-menuslist',
  templateUrl: './menuslist.component.html',
  styleUrls: ['./menuslist.component.css'],
})
export class MenuslistComponent implements OnInit {
  menus: any = [];

  constructor(private request: RequestService) {}

  ngOnInit(): void {
    this.getmenus();
  }

  getmenus(): void {
    this.request.get('menu/get').subscribe(
      (res: any) => {
        this.menus = res;
        console.log(res);
      },
      (err: any) => {}
    );
  }
}
