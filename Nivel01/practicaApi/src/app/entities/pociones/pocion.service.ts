import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PocionService {

  constructor(private http:HttpClient) {

   }

  getAllPociones():Observable<any>{
    return this.http.get("http://localhost:8080/api/pociones");
  }
}


