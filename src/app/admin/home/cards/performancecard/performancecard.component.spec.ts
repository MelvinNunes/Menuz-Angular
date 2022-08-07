import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancecardComponent } from './performancecard.component';

describe('PerformancecardComponent', () => {
  let component: PerformancecardComponent;
  let fixture: ComponentFixture<PerformancecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformancecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformancecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
