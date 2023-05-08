import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  initForm = {
    producto: 'Bicicleta',
    precio: 0,
    existencias: 0
  }


  ngOnInit(): void {
  }


  @ViewChild('miFormulario') miFormulario!: NgForm;
  
  



  campoNoValido(campo: string) : boolean {
  
    return this.miFormulario?.controls[campo]?.invalid 
        && this.miFormulario?.controls[campo]?.touched;
  }


  guardarFormulario(  ) {
  

    console.log( this.miFormulario );
    if ( this.miFormulario.invalid ) {
      
      this.miFormulario.control.markAllAsTouched();
      return;
    }


    console.log('FORMULARIO GUARDADO');

    
   
    this.miFormulario.reset(this.initForm);
    

  
  }


  // buscarTexto( dato: string ): void  {
  //   console.log( dato );   
  // }

}
