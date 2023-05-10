import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {



  public emailPattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
  public expresion_regular_dni = /^(([X-Zx-z]{1})([-]?)(\d{7})([-]?)([A-Za-z]{1}))|((\d{8})([-]?)([A-Za-z]{1}))$/;


  constructor() { }





  campoNoValido(formulario: FormGroup, campo: string ): boolean | undefined {
    
    return formulario.get(campo)?.invalid 
      && formulario.get(campo)?.touched;
  }



  validaDni ( control: FormControl ): ValidationErrors | null  {

    const dni = control.value?.trim().toUpperCase() || ' ';

    let numero, letraDni, letra;

    numero = dni.substr(0,dni.length-1);
    numero = numero.replace('X', 0);
    numero = numero.replace('Y', 1);
    numero = numero.replace('Z', 2);
    letraDni = dni.substr(dni.length-1, 1);
    numero = numero % 23;
    letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
    letra = letra.substring(numero, numero+1);
    if (letra != letraDni) {
        //alert('Dni erroneo, la letra del NIF no se corresponde');
        return {
          dni: 'incorrecto'
        };
    }else{
        //alert('Dni correcto');
        return null;
    }

  }





}
