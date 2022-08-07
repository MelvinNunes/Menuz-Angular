import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientscardComponent } from './clientscard.component';

describe('ClientscardComponent', () => {
  let component: ClientscardComponent;
  let fixture: ComponentFixture<ClientscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
