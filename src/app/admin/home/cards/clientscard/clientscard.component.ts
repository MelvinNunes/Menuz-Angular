import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/utils/services/request.service';

@Component({
  selector: 'app-clientscard',
  templateUrl: './clientscard.component.html',
  styleUrls: ['./clientscard.component.css'],
})
export class ClientscardComponent implements OnInit {
  totalUsers: number = 0;

  constructor(private request: RequestService) {}

  ngOnInit(): void {
    this.getTotalUsers();
  }

  getTotalUsers(): void {
    this.request.get('user/gettotal').subscribe(
      (res: any) => {
        this.totalUsers = res;
      },
      (err: any) => {}
    );
  }
}
