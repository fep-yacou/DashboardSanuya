import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DemandeService } from '../Service/demande.service';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.scss']
})
export class DetailDemandeComponent implements OnInit {
  demande: any;
  id: any;
  image = environment.URLPhoto
  constructor(public service: DemandeService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailDemandeAnnonce(this.id).subscribe((data: any)=>{
    this.demande = data;
    })
    this.image
  }

}
