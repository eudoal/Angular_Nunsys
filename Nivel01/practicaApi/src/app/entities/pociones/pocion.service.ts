import { Injectable } from '@angular/core';
import { Pocion } from './pocion.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PocionService {

  pociones: Pocion[]=[];
  constructor(private http:HttpClient) { 

  }

  getAllPociones():Observable<Pocion[]>{
    return this.http.get<Pocion[]>("http://localhost:8080/api/pociones");
  }

  getTop3():Observable<Pocion[]>{
    return this.http.get<Pocion[]>("http://localhost:8080/api/pociones/top3");
  }
  getPocionById(id:number):Observable<Pocion>{
    return this.http.get<Pocion>("http://localhost:8080/api/pociones/"+id);
  }
  getEpicPociones():Observable<Pocion[]>{
    return this.http.get<Pocion[]>("http://localhost:8080/api/pociones/epic");
  }
}
