import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selectores',
  templateUrl: './selectores.component.html',
  styleUrls: ['./selectores.component.css']
})
export class SelectoresComponent implements OnInit{


  public miFormulario: FormGroup = this.fb.group({

    region: ['', Validators.required ],
    pais: ['', Validators.required ],
    frontera: ['', Validators.required ]
 
  });

  // Propiedades de los selectores
  regiones: string[] = [];
  paises: Pais[] = [];
  fronteras: string[] = [];


  cargando = false;



  constructor( private paisesService: PaisesService,
               private fb: FormBuilder) {}


  ngOnInit(): void {

    
      // Primer combo - regiones - continentes 
      this.regiones = this.paisesService.regiones;

      // Cuando cambia el primer combo
      // this.miFormulario.get('region')?.valueChanges.subscribe( resp => {
      
      //   this.paisesService.getPaisesPorRegion ( resp ).subscribe( paises => {
        
      //     this.paises = paises;
        
      //   }); 

      // });

      this.miFormulario.get('region')?.valueChanges
      .pipe(
        
        tap( region => {
        
          this.miFormulario.get('pais')?.reset('');
          this.cargando = true;
          
        } ),

        switchMap( region => this.paisesService.getPaisesPorRegion( region ) )


      ).subscribe( paises => {
      
        this.paises = paises;
        this.cargando = false;
      
      });

      // Cuando cambia el segundo selector.
      this.miFormulario.get('pais')?.valueChanges
      .pipe(

        tap( pais => {
            this.cargando = true;
            this.miFormulario.get('frontera')?.reset('');

        }),
  
        
        switchMap( codigo => this.paisesService.getPaisPorCodigo( codigo ) )
        
      ).subscribe( pais => {
      
        this.fronteras = pais?.borders || [];
        this.cargando = false;
      
      });




  }



              


  guardar() {
  
  }


}
