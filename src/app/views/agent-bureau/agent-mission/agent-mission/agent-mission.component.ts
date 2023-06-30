import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentMService } from 'src/app/services/agent-m.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-agent-mission',
  templateUrl: './agent-mission.component.html',
  styleUrls: ['./agent-mission.component.css']
})
export class AgentMissionComponent implements OnInit {
  AgentMForm: FormGroup;
  AgentMs: any;
  categories: any;
  id:any
  constructor(
    private formBuilder: FormBuilder,
    private agentMService: AgentMService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.AgentMForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      adresse: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      responsabilite: ['', Validators.required],

      role: ['3'],
    });

    this.agentMService.getAgentM().subscribe((data) => {
      this.AgentMs = data;
      console.log(this.AgentMs);
    });
    this.categoryService.getAllcat().subscribe((data)=>{
      this.categories=data
      console.log(this.categories)
    });


  }



  onSubmit(): void {
    console.log(this.AgentMForm.value);
    this.agentMService.AddAgentM(this.AgentMForm.value).subscribe((data) => {
      console.log(data);
      this.AgentMForm.reset();
      window.location.reload();

    });
  }

  onDelete(id): void {
    this.agentMService.DeleteAgentM(id).subscribe((data) => {
      console.log(data);
      window.location.reload();

    });
  }

  editRow(AgentM) {
    this.id=AgentM._id
    this.AgentMForm.setValue({
      name: AgentM.name,
      lastname: AgentM.lastname,
      adresse: AgentM.adresse,
      tel: AgentM.tel,
      email: AgentM.email,
      password: AgentM.password,
      responsabilite:AgentM.responsabilite,
      role: '3',
    });

  }

  update(){
    console.log(this.AgentMForm.value);

    this.agentMService.UpdateAgentM(this.AgentMForm.value,this.id).subscribe((data) => {
      console.log(data);
      window.location.reload();

    });
  }
}
