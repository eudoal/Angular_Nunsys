import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Raza } from './raza.model';
@Injectable({
  providedIn: 'root'
})
export class RazaService {

  constructor(private http:HttpClient) {
    
   }
   getAllRazas():Observable<Raza[]>{
     return this.http.get<Raza[]>("http://localhost:8080/api/razas");
   }
   getRazaById(id:number):Observable<Raza>{
    return this.http.get<Raza>("http://localhost:8080/api/razas/"+id);
  }
}
