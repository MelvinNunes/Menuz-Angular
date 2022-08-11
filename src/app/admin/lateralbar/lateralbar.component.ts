import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lateralbar',
  templateUrl: './lateralbar.component.html',
  styleUrls: ['./lateralbar.component.css'],
})
export class LateralbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
