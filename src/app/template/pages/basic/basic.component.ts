import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {


  @ViewChild('miFormulario') miFormulario!: NgForm;


  

  campoNoValido(campo: string) : boolean {
  
    return this.miFormulario?.controls[campo]?.invalid 
        && this.miFormulario?.controls[campo]?.touched;
  }


  guardarFormulario(  ) {
  

    console.log('Guardando formulario...');
    console.log( this.miFormulario.value );

    console.log( this.miFormulario );

  
  }


  // buscarTexto( dato: string ): void  {
  //   console.log( dato );   
  // }

}
