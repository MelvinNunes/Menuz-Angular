import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstypeComponent } from './userstype.component';

describe('UserstypeComponent', () => {
  let component: UserstypeComponent;
  let fixture: ComponentFixture<UserstypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserstypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
