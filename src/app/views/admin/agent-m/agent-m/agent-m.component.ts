import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentMService } from 'src/app/services/agent-m.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-agent-m',
  templateUrl: './agent-m.component.html',
  styleUrls: ['./agent-m.component.css'],
})
export class AgentMComponent implements OnInit {
  AgentMForm: FormGroup;
  AgentMs: any;
  categories: any;
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
    });
  }

  onDelete(id): void {
    this.agentMService.DeleteAgentM(id).subscribe((data) => {
      console.log(data);
    });
  }

  editRow(AgentM) {
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


}
