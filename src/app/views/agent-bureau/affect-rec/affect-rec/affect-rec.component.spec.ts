import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectRecComponent } from './affect-rec.component';

describe('AffectRecComponent', () => {
  let component: AffectRecComponent;
  let fixture: ComponentFixture<AffectRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
