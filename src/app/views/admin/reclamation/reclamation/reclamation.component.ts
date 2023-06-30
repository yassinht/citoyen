import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgentBService } from 'src/app/services/agent-b.service';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  myForm: FormGroup;
  agentForm: FormGroup;
  agents: any;
  selectedIndex: number = -1;
  idrec:any
  idb:any
  body:any
  recs:any
  recId:any;
  constructor(private formBuilder: FormBuilder, private reclamationService:ReclamationService,private agentBService:AgentBService) { 
    
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      photo: [null],
      municipalite: ['', Validators.required],
      address: ['', Validators.required],
      categorie: ['', Validators.required],
    });

    this.agentForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      municipalite: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['2'],

    });

    this.agentBService.getAllAgentB().subscribe((data)=>{
      this.agents=data
    })

     this.reclamationService.getAllrec().subscribe((data)=>{
      this.recs=data.reclamations
      console.log(this.recs)
    })
  }

  data(rec,){
    this.recId=rec._id
    console.log("idRec",this.recId)
  }

  assign(idAgent){
    console.log("idAgent",idAgent._id)

    let body=""
    this.reclamationService.affectrecToBureau(this.recId,idAgent._id,body).subscribe((data)=>{
      console.log(data)
      window.location.reload();

    })

  }
}
