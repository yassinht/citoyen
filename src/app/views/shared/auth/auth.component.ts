import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AgentBService } from 'src/app/services/agent-b.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isAgentSelected = true; // default to agent login form
  token:any
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router:Router,private adminService:AdminService ,private agentBService:AgentBService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
   }
   
   onToggleButtonClick(isAgentSelected: boolean) {
    this.isAgentSelected = isAgentSelected;
  }


  onLoginFormSubmit() {
    if (this.isAgentSelected) {
      this.agentBService.loginagentB(this.loginForm.value).subscribe((data)=>{
        console.log(data)
        this.token=data
        this.router.navigateByUrl('agentb');
        this.agentBService.saveDataAdmin(this.token)
      })

          } else {
          
              this.adminService.loginSAdmin(this.loginForm.value).subscribe((data)=>{
                console.log(data)
                this.token=data

                this.adminService.saveDataAdmin(this.token)
              this.router.navigateByUrl('admin');

              
            })

   }
  }
  
  ngOnInit(): void {
  }


}
