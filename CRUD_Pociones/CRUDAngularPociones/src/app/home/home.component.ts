import { Component, OnInit } from '@angular/core';
import { PocionService } from '../entities/pociones/pocion.service';
import { Pocion } from '../entities/pociones/pocion.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topPociones: Pocion[];

  constructor(private _pocionService: PocionService) { 
    this._pocionService.getPocionEpic().subscribe(
      result=>{
        this.topPociones = result;
              
      },
      err=>{
        console.log("getPocionEpic" + err);
        
      }
    )
  }

  ngOnInit() {
  }



}
