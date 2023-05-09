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

  nuevoFavorito: string = '';


  persona: Persona = {
    nombre: 'Sonia',
    favoritos: [
      { id: 78787, nombre: 'Java' },
      { id: 1245, nombre: 'Sql' },
      { id: 25, nombre: 'C++' }
    ]
  };



  agregarFavorito() {
  
    // console.log( this.nuevoFavorito );
    const favoritoNuevo: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito
    };

    this.persona.favoritos.push( favoritoNuevo );

  }


  eliminarFavorito( idx: number ) {
  
    this.persona.favoritos.splice( idx, 1 );
  }




  guardar() {

    

    if ( this.myForm.invalid ) {
      return;
    }

    console.log('Guardando...');



  }

}
