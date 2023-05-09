import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {


  persona = {
    genero: '',
    notificaciones: false,
  }

  terminosYCondiciones = false;

  guardar() {
  
    if ( !this.terminosYCondiciones ) {
      console.log('Tienes que aceptar los términos y condiciones');
      return;
    }

    console.log('Guardado');
  
  }

}
