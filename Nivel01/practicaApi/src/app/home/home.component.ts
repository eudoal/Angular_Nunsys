import { Component, OnInit } from '@angular/core';
import { PocionService } from '../entities/pociones/pocion.service';
import { Pocion } from '../entities/pociones/pocion.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topPociones:Pocion[];
  constructor(private _pocionService:PocionService) {

    // this._pocionService.getTop3().subscribe(
    //   result=>{
    //     this.topPociones = result;
    //     console.log(result);
    // },
    // err =>{
    //   debugger;
    //   console.error(err);
    // }
    //   );
    this._pocionService.getEpicPociones().subscribe(
      result=>{
        this.topPociones = result;
        console.log(result);
    },
    err =>{
      console.error(err);
    }
      );
    
   }

  ngOnInit() {
  }

}
