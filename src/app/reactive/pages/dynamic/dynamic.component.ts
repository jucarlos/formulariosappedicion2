import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  nuevoFavorito: FormControl = this.fb.control('',
     [ Validators.required, Validators.minLength(3)]);


  
  constructor( private fb: FormBuilder ) {}

  get favoritosArray() {
    return this.miFormulario.controls['favoritos'] as FormArray;
  }

  agregarFavorito() {
    
      if ( this.nuevoFavorito.invalid ) return;

      const nuevo = this.nuevoFavorito.value;

      this.favoritosArray.push( this.fb.control( nuevo, Validators.required ));

      this.nuevoFavorito.reset();
  
  }



  campoNoValido(campo: string) : boolean | undefined | null {
  
    return this.miFormulario.get(campo)?.errors &&
      this.miFormulario.get(campo)?.touched;

  }

  eliminar( index: number ): void {
  
    this.favoritosArray.removeAt( index );
  
  }



  guardar() {

    if ( this.miFormulario.invalid ) {
       this.miFormulario.markAllAsTouched();
       return;
    
    }

    this.miFormulario.reset();
  
  }



}
