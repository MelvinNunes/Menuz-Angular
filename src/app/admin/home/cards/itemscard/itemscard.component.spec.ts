import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemscardComponent } from './itemscard.component';

describe('ItemscardComponent', () => {
  let component: ItemscardComponent;
  let fixture: ComponentFixture<ItemscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
