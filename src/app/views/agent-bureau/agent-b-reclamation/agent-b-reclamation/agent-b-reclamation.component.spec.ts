import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentBReclamationComponent } from './agent-b-reclamation.component';

describe('AgentBReclamationComponent', () => {
  let component: AgentBReclamationComponent;
  let fixture: ComponentFixture<AgentBReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentBReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentBReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
