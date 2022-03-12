import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnonceServiceService } from '../annonce-service.service';


@Component({
  selector: 'app-ajout-annonce',
  templateUrl: './ajout-annonce.component.html',
  styleUrls: ['./ajout-annonce.component.scss']
})
export class AjoutAnnonceComponent implements OnInit {


  allCategory: any;
  public imgfile: any = File;
  public livrefile: any = File;
  submitted = false;
  formulaire: FormGroup;
  user: any;

  constructor(
    public service: AnnonceServiceService,
    public router: Router,
    public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      description: ['', Validators.required],
      categorie: ['', Validators.required],
      geolocalisation: ['']
    });
    this.user = JSON.parse(localStorage.getItem("userData"));
    console.log(this.user);
    
  }

  get f() { return this.formulaire.controls; }


  imgSelect(event) {
    const img = event.target.files[0];
    this.imgfile = img;
  }

  submitForm() {

    const file = new FormData();
    const dataAnnonce = this.formulaire.value;

    file.append('file', this.imgfile, this.imgfile.name);
    file.append('dataA', JSON.stringify(dataAnnonce));
    console.log("file==========", file);

    let description = this.formulaire.value['description'];
    let categorie = this.formulaire.value['categorie'];
    let geolocalisation = this.formulaire.value['geolocalisation'];

    this.service.ajoutAnnonce(file).subscribe((data) => {
        data.description = description,
        data.categorie = categorie,
        data.geolocalisation = geolocalisation
        if(this.user.type == 'SimpleUtilisateur'){
          data.utilisateur = this.user
        }
        if(this.user.type == 'Administrateur'){
          data.admin = this.user
        }
        console.log(data);
        
        data.email = this.user.email
        console.log("localstorage : ", this.user.email);

      console.log("dataSave============", data);


      this.service.updateAnnonce(data.id_annonce, data).subscribe((data) => {
        console.log("dataUpdate============", data);
      })
    })


  }

}
