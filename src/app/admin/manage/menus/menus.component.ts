import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css'],
})
export class MenusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
