import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {
  url = environment.URL;
  constructor(
    private http: HttpClient,
  ) { }

    //liste Utilisateur
    listeutilisateur(){
      return this.http.get(this.url + '/listUtilisateur');
    }
    //ajout Participant
    ajoutParticipant(app:any){
      return this.http.post(this.url + '/ajoutUtilisateur', app);
    }
    //Modifier Participant
    updateParticipant(id: any, part:any){
      return this.http.put(this.url + `/participant/${id}`, part);
    }
    //Details Participant
    detailParticipant(id_participant:any){
      return this.http.get(this.url + `/participantById/${id_participant}`);
    }

    //Supprimer Participant
    deleteParticipant(id: any){
      console.log("delete service");
      return this.http.delete(this.url + "/deleteParticipant/"+id)
    }
}
