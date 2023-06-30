import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRecComponent } from './category-rec.component';

describe('CategoryRecComponent', () => {
  let component: CategoryRecComponent;
  let fixture: ComponentFixture<CategoryRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
