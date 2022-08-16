import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/utils/services/request.service';

@Component({
  selector: 'app-itemscard',
  templateUrl: './itemscard.component.html',
  styleUrls: ['./itemscard.component.css'],
})
export class ItemscardComponent implements OnInit {
  totalItems: number = 0;

  constructor(private request: RequestService) {}

  ngOnInit(): void {
    this.getTotalItems();
  }

  getTotalItems(): void {
    this.request.get('item/gettotal').subscribe(
      (res: any) => {
        this.totalItems = res;
      },
      (err: any) => {}
    );
  }
}
