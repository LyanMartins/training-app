import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalItemComponent } from './total-item.component';

describe('TotalItemComponent', () => {
  let component: TotalItemComponent;
  let fixture: ComponentFixture<TotalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
