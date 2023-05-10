import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/pais.interface';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  private baseUrl = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }


  private _regiones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones() {
    return [...this._regiones];
  }

  getPaisesPorRegion( region: string ): Observable<Pais[]> {
    
    const url = `${this.baseUrl}/region/${region}?fields=name,alpha3Code`;
    
    return this.http.get<Pais[]>( url )
    .pipe(
      delay( 200 )
    );
  
  }

  getPaisPorCodigo( codigo: string ): Observable<Pais | null > {
  
    if ( !codigo ) {
      return of ( null );
    }
   
    const url = `${this.baseUrl}/alpha/${codigo}?fields=name,alpha3Code,borders`;

    return this.http.get<Pais>( url )
    .pipe(
      delay( 200 )
    );
  

  }




}
