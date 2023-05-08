import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favorito[];
};

interface Favorito {
  id: number;
  nombre: string;
}




@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {


  @ViewChild('myForm') myForm!: NgForm;

  persona: Persona = {
    nombre: 'Sonia',
    favoritos: [
      { id: 78787, nombre: 'Java' },
      { id: 1245, nombre: 'Sql' }
    ]
  };


  guardar() {
  }

}
