import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {


  miFormulario: FormGroup = this.fb.group({
    nombre: [ '' , [ Validators.required, Validators.minLength(3) ]  ,     ],
    favoritos: this.fb.array([
      ['Java', Validators.required ],
      ['Sql', Validators.required ]
    ])
  
  });

  
  constructor( private fb: FormBuilder ) {}

  get favoritosArray() {
    return this.miFormulario.controls['favoritos'] as FormArray;
  }



  campoNoValido(campo: string) : boolean | undefined | null {
  
    return this.miFormulario.get(campo)?.errors &&
      this.miFormulario.get(campo)?.touched;

  }

  eliminar( index: number ): void {
  
    console.log( index );
  
  }



  guardar() {
  
  }



}
