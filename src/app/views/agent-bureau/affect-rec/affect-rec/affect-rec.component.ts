import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgentMService } from 'src/app/services/agent-m.service';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-affect-rec',
  templateUrl: './affect-rec.component.html',
  styleUrls: ['./affect-rec.component.css'],
})
export class AffectRecComponent implements OnInit {
  recForm: FormGroup;
  reclamations: any;
  AgentMs: any;
  recId: any;
  MId: any;
  idb: any;
  constructor(
    private formBuilder: FormBuilder,
    private reclamationService: ReclamationService,
    private agentMService: AgentMService,
  ) {
    this.idb = localStorage.getItem('id_agentB');
    console.log(this.idb);

  }

  ngOnInit(): void {
    this.recForm = this.formBuilder.group({
      photo: [null],
      municipalite: ['', Validators.required],
      address: ['', Validators.required],
      categorie: ['', Validators.required],
    });

    this.reclamationService.getRecBureau(this.idb).subscribe((res) => {
      this.reclamations = res
      ;
      console.log(this.reclamations);

      console.log(this.idb);
    });
    this.agentMService.getAgentM().subscribe((data) => {
      this.AgentMs = data;
    });
  }

  data(rec,){
    this.recId=rec._id
    console.log("idRec",this.recId)
  }

  assign(idAgent){
    console.log("idAgent",idAgent._id)

    let body=""
    this.reclamationService.affectrecToMission(this.recId,idAgent._id,body).subscribe((data)=>{
      console.log(data)
      window.location.reload();

    })

  }


}
