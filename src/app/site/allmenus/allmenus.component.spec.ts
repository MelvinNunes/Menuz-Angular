import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmenusComponent } from './allmenus.component';

describe('AllmenusComponent', () => {
  let component: AllmenusComponent;
  let fixture: ComponentFixture<AllmenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmenusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
