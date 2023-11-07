import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretoryListComponent } from './caretory-list.component';

describe('CaretoryListComponent', () => {
  let component: CaretoryListComponent;
  let fixture: ComponentFixture<CaretoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaretoryListComponent]
    });
    fixture = TestBed.createComponent(CaretoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
