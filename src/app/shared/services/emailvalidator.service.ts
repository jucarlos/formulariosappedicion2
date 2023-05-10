import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, catchError, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailvalidatorService implements AsyncValidator{
  

  constructor(private http: HttpClient) { }


  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    
    // 1. Petción http al servidor.
    // 2. Si [].length == 0, pues no hay errores.
    // 3. Si [].length  > 0 pues hay error.

    if ( !control.value ) {
      return of ( null );
    }

    const email = control.value;

    const url = `http://localhost:3000/usuarios?q=${email}`;


    return this.http.get( url )
    .pipe(
 
      delay( 2000 ),
      map( (resp: any) => {
      
      return ( resp.length === 0 ) ? null : { emailUsado: true };

      } )
      
    );
    
    


  }


  
}
