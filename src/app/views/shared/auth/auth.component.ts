import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isAgentSelected = true; // default to agent login form
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router:Router) {
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
      this.router.navigateByUrl('/agent');

          } else {
            this.router.navigateByUrl('admin');

   }
  }
  
  ngOnInit(): void {
  }


}
