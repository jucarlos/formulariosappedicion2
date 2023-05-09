import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../shared/services/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public miFormulario: FormGroup = this.fb.group({

    nombre: [ '' , [ Validators.required , Validators.minLength(3) ] ],

    identificador: [ '' , [ 

        Validators.required,
        Validators.pattern( this.validationService.expresion_regular_dni ),
        this.validationService.validaDni
      
    ] ],

    email: [ '' , [ 
      Validators.required, 
      Validators.pattern( this.validationService.emailPattern ) 
    ]  ],

    userName: [ '', [ Validators.required, ] ],


    password1: [ '', [ Validators.required, Validators.minLength( 6 ) ]],

    password2: [ '', [ Validators.required ]]


  });

  

  constructor(private fb: FormBuilder,
              private validationService: ValidationService ) { }


  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Sonia',
      identificador: '03869206P',
    });

  }



  campoNoValido(campo: string ): boolean | undefined {
    
    return this.validationService.campoNoValido( this.miFormulario, campo);
    
  }




  guardar() {
  
  }


}
