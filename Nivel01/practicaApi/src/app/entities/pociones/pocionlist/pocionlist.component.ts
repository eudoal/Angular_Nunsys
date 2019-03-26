import { Component, OnInit } from '@angular/core';
import { PocionService } from '../pocion.service';
import { Pocion } from '../pocion.model';

@Component({
  selector: 'app-pocionlist',
  templateUrl: './pocionlist.component.html',
  styleUrls: ['./pocionlist.component.css']
})
export class PocionlistComponent implements OnInit {
  pociones:Pocion[]=[];
  constructor(private _pocionService: PocionService) { 

    this._pocionService.getAllPociones().subscribe(
      result=>{
          this.pociones = result;
          console.log(result);
      },
      err =>{
        debugger;
        console.error(err);
      }
        );
      }


  ngOnInit() {
  }

  
}
