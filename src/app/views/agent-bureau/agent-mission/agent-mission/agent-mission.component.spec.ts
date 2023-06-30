import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMissionComponent } from './agent-mission.component';

describe('AgentMissionComponent', () => {
  let component: AgentMissionComponent;
  let fixture: ComponentFixture<AgentMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
