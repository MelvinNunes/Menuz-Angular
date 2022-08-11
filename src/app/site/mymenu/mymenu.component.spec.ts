import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymenuComponent } from './mymenu.component';

describe('MymenuComponent', () => {
  let component: MymenuComponent;
  let fixture: ComponentFixture<MymenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
