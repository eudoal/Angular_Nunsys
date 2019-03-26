import { Component, OnInit } from '@angular/core';
import { Pocion } from '../pocion.model';
import { PocionService } from '../pocion.service';

@Component({
  selector: 'app-pocion-list',
  templateUrl: './pocion-list.component.html',
  styleUrls: ['./pocion-list.component.css']
})
export class PocionListComponent implements OnInit {
  pociones:Pocion[]=[];
  constructor(private _pocionService: PocionService) { 

    this._pocionService.getAllPociones().subscribe(
      result=>{
        if(result.code != 200){
          console.log(result);
        }else{
          this.pociones = result.data;
          console.log(this.pociones);
        }
      },
      err =>{
        console.error(err);
      }
        );
      }


  ngOnInit() {
  }

}
