import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalescardComponent } from './salescard.component';

describe('SalescardComponent', () => {
  let component: SalescardComponent;
  let fixture: ComponentFixture<SalescardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalescardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalescardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
