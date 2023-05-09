import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true , Validators.required ],
    terminos: [ false , Validators.required ]
  });



  persona = {
    genero: 'F',
    notificaciones: true,
  }


  constructor(private fb: FormBuilder ) {}


  ngOnInit(): void {
    
    this.miFormulario.valueChanges.subscribe( ( resp ) => {

      const { terminos, ...resto } = resp;
    
      this.persona = resto;

    });


  }






  guardar() {


    const formValue = this.miFormulario.value;

    // delete formValue.terminos;

    const { terminos, ...restoDeCampos } = this.miFormulario.value;

    this.persona = restoDeCampos;

  
  

     
  }


}
