import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentBService } from 'src/app/services/agent-b.service';

@Component({
  selector: 'app-agent-b',
  templateUrl: './agent-b.component.html',
  styleUrls: ['./agent-b.component.css']
})
export class AgentBComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private agentBService:AgentBService) { }
  agentForm: FormGroup;
  agents: any;
  selectedIndex: number = -1;
  idAgent:any

  ngOnInit(): void {
    this.agentForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      tel: ['', Validators.required],
      municipalite: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['2'],

    });

    this.agentBService.getAllAgentB().subscribe((data)=>{
      this.agents=data
    })
  }

  onSubmit(): void {
    console.log(this.agentForm.value)
    this.agentBService.AddAgentB(this.agentForm.value).subscribe((data)=>{
      console.log(data)
      this.agentForm.reset()
      window.location.reload();

    })
  }


  onDelete(id): void {
    this.agentBService.DeleteAgentB(id).subscribe((data)=>{
      console.log(data)
      window.location.reload();

    })
  }




  editRow(agent,idAgent) {
    this.idAgent=idAgent
    this.agentForm.setValue({
      name: agent.name,
      lastname: agent.lastname,
      tel: agent.tel,
      municipalite:agent.municipalite,
      email: agent.email,
      password: agent.password,
      role:'2'
    });

  }

  update(){
    this.agentBService.UpdateAgentB(this.agentForm.value,this.idAgent).subscribe((data) => {
      console.log(data);
    });
    window.location.reload();

  }
  
}
