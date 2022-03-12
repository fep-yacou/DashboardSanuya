import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../Service/demande.service';

@Component({
  selector: 'app-demande-attente',
  templateUrl: './demande-attente.component.html',
  styleUrls: ['./demande-attente.component.scss']
})
export class DemandeAttenteComponent implements OnInit {
demande: any=[];
  constructor(public service: DemandeService) { }

  ngOnInit(): void {
    this.service.listeDemandeAnnonce().subscribe((dem:any)=>{
      for(let i = 0; i< dem.length; i++){
        if(dem[i].etatAnnonce == 'Encours'){
          this.demande.push(dem[i]);
        }
      }
    })
    
  }

}
