import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ValidationService } from '../../../shared/services/validation.service';
import { EmailvalidatorService } from '../../../shared/services/emailvalidator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  get emailMsgError(): string {
    

    const errors = this.miFormulario.get('email')?.errors;

    if ( errors?.['required']) {
      return 'El email es obligatorio';
    } else if ( errors?.['pattern']) {
      return 'No es un email correcto';
    } else if ( errors?.['emailUsado']) {
      return 'El correo ya ha sido utilizado';
    }

    return '';
  }



  public miFormulario: FormGroup = this.fb.group({

    nombre: [ '' , [ 
      Validators.required , 
      Validators.minLength(3) 
    ] ],

    identificador: [ '' , [ 

        Validators.required,
        Validators.pattern( this.validationService.expresion_regular_dni ),
        this.validationService.validaDni
      
    ] ],

    email: [ '' , [ 
      Validators.required, 
      Validators.pattern( this.validationService.emailPattern ) 
    ], [ 
      this.emailValidator
    ]    ],

    userName: [ '', [ 
      Validators.required,
      this.validationService.noPuedeSerCarlos
    ] ],


    password1: [ '', [ Validators.required, Validators.minLength( 6 ) ]],

    password2: [ '', [ Validators.required ]]


  } , {   
    validators: 
    [ this.validationService.camposIguales('password1', 'password2') ]
  }      );

  

  constructor(private fb: FormBuilder,
              private validationService: ValidationService,
              private emailValidator: EmailvalidatorService ) { }


  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Sonia',
      identificador: '03869206P',
      email: 'test44@test.com',
      userName: 'soniaName',
    });

  }



  campoNoValido(campo: string ): boolean | undefined {
    
    return this.validationService.campoNoValido( this.miFormulario, campo);
    
  }

 

  guardar() {

    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log('Guardando');
  
  }


}
