import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMissionLayoutComponent } from './agent-mission-layout.component';

describe('AgentMissionLayoutComponent', () => {
  let component: AgentMissionLayoutComponent;
  let fixture: ComponentFixture<AgentMissionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentMissionLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentMissionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
