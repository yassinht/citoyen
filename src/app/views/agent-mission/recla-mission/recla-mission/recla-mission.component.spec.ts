import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclaMissionComponent } from './recla-mission.component';

describe('ReclaMissionComponent', () => {
  let component: ReclaMissionComponent;
  let fixture: ComponentFixture<ReclaMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclaMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclaMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
