import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/utils/services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  menus: any = [];

  constructor(private request: RequestService) {}

  ngOnInit(): void {
    this.getmenus();
  }

  getmenus(): void {
    this.request.get('menu/get').subscribe(
      (res: any) => {
        this.menus = res;
      },
      (err: any) => {}
    );
  }
}
