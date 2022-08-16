import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/utils/services/request.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  totalMenus: number = 0;

  constructor(private request: RequestService) {}

  ngOnInit(): void {
    this.getTotalMenus();
  }

  getTotalMenus(): void {
    this.request.get('menu/gettotal').subscribe(
      (res: any) => {
        this.totalMenus = res;
      },
      (err: any) => {}
    );
  }
}
