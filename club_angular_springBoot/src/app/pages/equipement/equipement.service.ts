import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Equipement } from 'src/app/models/Equipement';
import { Salle } from "src/app/models/Salle";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class equipementservice{ 
 private apiServeurUrl= environment.apiBaseUrl;

 constructor(private http: HttpClient){}

public getEquipementById(equipementId:number) :Observable<Equipement> {
   return this.http.get<Equipement>(`${this.apiServeurUrl}/Equipement/find/${equipementId}`);
}

public getEquipements():Observable<Equipement[]>{
    return this.http.get<Equipement[]>(`${this.apiServeurUrl}/Equipement/all`)
 }
 
 public addEquipement(equipement:Equipement):Observable<Equipement>{
    return this.http.post<Equipement>(`${this.apiServeurUrl}/Equipement/add`,equipement)
 } 

 public updateEquipement(equipement:Equipement):Observable<Equipement>{
    return this.http.put<Equipement>(`${this.apiServeurUrl}/Equipement/update`,equipement)
 }

 public deleteEquipement(equipementId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServeurUrl}/Equipement/delete/${equipementId}`)
 }





 
 public getSalleById(salleId:number) :Observable<Salle> {
   return this.http.get<Salle>(`${this.apiServeurUrl}/Salle/find/${salleId}`);
}

public getSalles():Observable<Salle[]>{
    return this.http.get<Salle[]>(`${this.apiServeurUrl}/Salle/all`)
 }


 public getSallesAvailable():Observable<Salle[]>{
   return this.http.get<Salle[]>(`${this.apiServeurUrl}/Salle/Available`)
}


public getSallesNoAvailable():Observable<Salle[]>{
   return this.http.get<Salle[]>(`${this.apiServeurUrl}/Salle/NoAvailable`)
}


 public addSalle(salle:Salle):Observable<Salle>{
    return this.http.post<Salle>(`${this.apiServeurUrl}/Salle/add`,salle)
 } 

 public updateSalle(salle:Salle):Observable<Salle>{
    return this.http.put<Salle>(`${this.apiServeurUrl}/Salle/update`,salle)
 }

 public deleteSalle(salleId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServeurUrl}/Salle/delete/${salleId}`)
 }
}