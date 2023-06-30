import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMComponent } from './agent-m.component';

describe('AgentMComponent', () => {
  let component: AgentMComponent;
  let fixture: ComponentFixture<AgentMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
