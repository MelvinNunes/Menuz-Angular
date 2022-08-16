import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuscardComponent } from './menuscard.component';

describe('MenuscardComponent', () => {
  let component: MenuscardComponent;
  let fixture: ComponentFixture<MenuscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuscardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
