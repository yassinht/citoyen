import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitoyenService } from 'src/app/services/citoyen.service';

@Component({
  selector: 'app-citoyen',
  templateUrl: './citoyen.component.html',
  styleUrls: ['./citoyen.component.css']
})
export class CitoyenComponent implements OnInit {
  citoyenForm: FormGroup;
  citoyens: any;
  idcit:any
  constructor(private formBuilder: FormBuilder,private citoyenService:CitoyenService,) { }

  ngOnInit(): void {
    this.citoyenForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      adresse: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['4'],

    });

    this.citoyenService.getAllCitoyen().subscribe((data)=>{
      this.citoyens=data
      
    })
  }

  onSubmit(): void {
    console.log(this.citoyenForm.value)
    this.citoyenService.AddCitoyen(this.citoyenForm.value).subscribe((data)=>{
      console.log(data)
      this.citoyenForm.reset()
      window.location.reload();

    })
  }


  onDelete(id): void {
    this.citoyenService.DeleteCitoyen(id).subscribe((data)=>{
      console.log(data)
      window.location.reload();

    })
  }

  editRow(citoyen,idcit) {
    this.idcit=idcit
    this.citoyenForm.setValue({
      name: citoyen.name,
      lastname: citoyen.lastname,
      adresse: citoyen.adresse,
      tel: citoyen.tel,
      email: citoyen.email,
      password: citoyen.password,
      role:'4'
    });
  
  }

  update(){
  this.citoyenService.UpdateCitoyen(this.citoyenForm.value,this.idcit).subscribe((data)=>{
    console.log(this.citoyenForm.value)
  })
  window.location.reload();

  }
  
}
