import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pocion } from './pocion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PocionService {

  //Lista de pociones
  pociones: Pocion[];
  constructor(private http: HttpClient) {

  }

  //Llamada a la API

  getAllPociones(): Observable<Pocion[]> {
    return this.http.get<Pocion[]>("http://localhost:8080/api/pociones");

  }

  //Obtener pociones por ID

  getPocionById(id: number): Observable<Pocion> {
    return this.http.get<Pocion>("http://localhost:8080/api/pociones/" + id);
  }

  //Obtener pociones epicas

  getPocionEpic(): Observable<Pocion[]> {
    return this.http.get<Pocion[]>("http://localhost:8080/api/pociones/epic");
  }

  //Insertar Pocion 

  insertarPocion(pocion: Pocion): Observable<any> {
    const urlEndPoint = "http://localhost:8080/api/pociones";
    return this.http.post(urlEndPoint, pocion);
  }

  //Editar Pocion

  editarPocion(pocion: Pocion): Observable<any> {
    const urlEndPoint = "http://localhost:8080/api/pociones";
    return this.http.put(urlEndPoint, pocion);

  }

  //Borrar Pocion

  borrarPocion(id: number): Observable<any> {
    const urlEndPoint = "http://localhost:8080/api/pociones/" + id;
    return this.http.delete(urlEndPoint)
  }

}
