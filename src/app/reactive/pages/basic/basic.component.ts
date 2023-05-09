import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {

  
  // public miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('Bicicleta'),
  //   'precio': new FormControl(150),
  //   'existencias': new FormControl( 1 )
  // });

  // SERvicio para crear formularios reactives.


  public miFormulario: FormGroup = this.fb.group({
    'nombre': [ '', [ Validators.required, Validators.minLength(5) ] ,  ],
    'precio': [ , [ Validators.required, Validators.min(0) ],  ],
    'existencias': [ , [ Validators.required, Validators.min(0) ],  ]
  });

  constructor(private fb: FormBuilder) {}



  campoNoValido(campo: string) : boolean | undefined | null {
  
    return this.miFormulario.get(campo)?.errors &&
      this.miFormulario.get(campo)?.touched;

  }

  guardar(): void {
  
    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    
    console.log('Enviado...');

  }




}
