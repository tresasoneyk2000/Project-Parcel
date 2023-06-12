import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelformComponent } from './parcelform.component';

describe('ParcelformComponent', () => {
  let component: ParcelformComponent;
  let fixture: ComponentFixture<ParcelformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
