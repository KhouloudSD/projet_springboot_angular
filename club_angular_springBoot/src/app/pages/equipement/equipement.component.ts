import { Component, OnInit } from '@angular/core';
import { Role, User } from 'src/app/models';
import { Equipement } from 'src/app/models/Equipement';
import { AuthenticationService } from 'src/app/services';
import { equipementservice } from 'src/app/pages/equipement/equipement.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Salle } from 'src/app/models/Salle';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})
export class EquipementComponent implements OnInit {


  public salles : Salle[];
  public editSalle : Salle;
  public deleteSalle : Salle;
  public toUpdateSalle : Salle;
  public salleAv: Salle[];

  public toUpdateEquipement : Equipement;


  public equipements:Equipement[];
  public editEquipement : Equipement;
  public deleteEquipement : Equipement;
  
  user!: User;

  constructor(private authenticationService: AuthenticationService, private equipementservice: equipementservice) {}

  ngOnInit() {

    this.getEquipements();
    this.getSalles();
    
  }
  public getEquipements():void{
    this.equipementservice.getEquipements().subscribe(
      (response: Equipement []) =>{
      this.equipements= response;
    } ,
    (error:  HttpErrorResponse ) =>{
      alert(error.message);
    })  
  }
  public getSallesAv():void{
    this.equipementservice.getSallesAvailable().subscribe(
      (response: Salle[] ) =>{
      this.salleAv= response;
    } ,
    (error:  HttpErrorResponse ) =>{
      alert(error.message);
    })  
  }

  public getSalles():void{
    this.equipementservice.getSalles().subscribe(
      (response: Salle []) =>{
      this.salles= response;
    } ,
    (error:  HttpErrorResponse ) =>{
      alert(error.message);
    })  
  }

  public getSallesAvailable():void{
    this.equipementservice.getSallesAvailable().subscribe(
      (response: Salle []) =>{
      this.salles= response;
    } ,
    (error:  HttpErrorResponse ) =>{
      alert(error.message);
    })  
  }

  public onAddEquipement(addForm: NgForm): void {
    document.getElementById('add-Equipement-form').click();
    this.equipementservice.addEquipement(addForm.value).subscribe(
      (response: Equipement) => {
        console.log(response);
        this.getEquipements();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onAddSalle(addForm: NgForm): void {
    document.getElementById('add-Salle-form').click();
    this.equipementservice.addSalle(addForm.value).subscribe(
      (response: Salle) => {
        console.log(response);
        this.getSalles();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onUpdateEquipement(equipement: Equipement): void {
    this.equipementservice.updateEquipement(equipement).subscribe(
      (response: Equipement) => {
        console.log(response);
        this.getEquipements();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateSalle(salle: Salle): void {
    this.equipementservice.updateSalle(salle).subscribe(
      (response: Salle) => {
        console.log(response);
        this.getSalles();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getEquipById(id: number):void{
    this.equipementservice.getEquipementById(id).subscribe(
      (response: Equipement ) =>{
      this.toUpdateEquipement= response;
    } ,
    (error:  HttpErrorResponse ) =>{
      alert(error.message);
    })  
  }
  public getSalleById(id: number):void{
    this.equipementservice.getSalleById(id).subscribe(
      (response: Salle ) =>{
      this.toUpdateSalle= response;
    } ,
    (error:  HttpErrorResponse ) =>{
      alert(error.message);
    })  
  }




  public onDeleteEquipement(equipementId: number): void {
    this.equipementservice.deleteEquipement(equipementId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEquipements();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteSalle(salleId: number): void {
    this.equipementservice.deleteEquipement(salleId).subscribe(
      (response: void) => {
        console.log(response);
        this.getSalles();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public searchEquipements(key: string): void {
    console.log(key);
    const results: Equipement[] = [];
    for (const equipement of this.equipements) {
      if (equipement.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || equipement.state.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(equipement);
      }
    }
    this.equipements = results;
    if (results.length === 0 || !key) {
      this.getEquipements();
    }
  }


  public searchSalles(key: string): void {
    console.log(key);
    const results: Salle[] = [];
    for (const salle of this.salles) {
      if (salle.num.toString().indexOf(key.toLowerCase()) !== -1
      || salle.state.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(salle);
      }
    }
    this.salles = results;
    if (results.length === 0 || !key) {
      this.getSalles();
    }
  }

  public Availabilite (salle : Salle): string{

    if (salle.isAvailable === 1 ){  return "yes";}
    else return "no";
  }

  public onOpenModal(equipement: Equipement, mode: string ): void {

    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') { 
      button.setAttribute('data-target', '#addEquipementModal');
    }
    if (mode === 'edit') {
      this.editEquipement = equipement;
      button.setAttribute('data-target', '#updateEquipementModal');
    }
    if (mode === 'delete') {
      this.deleteEquipement = equipement;
      button.setAttribute('data-target', '#deleteEquipementModal');

    }
    container.appendChild(button);
    button.click();
  }



  public onOpenModalSalle(salle: Salle, mode: string ): void {

    const container = document.getElementById('main-containerr');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') { 
      button.setAttribute('data-target', '#addSalleModal');
    }
    if (mode === 'edit') {
      this.editSalle = salle;
      button.setAttribute('data-target', '#updateSalleModal');
    }
    if (mode === 'delete') {
      this.deleteSalle = salle;
      button.setAttribute('data-target', '#deleteSalleModal');

    }
    container.appendChild(button);
    button.click();
  }


}







