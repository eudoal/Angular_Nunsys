import { Component, OnInit } from '@angular/core';
import { Pocion } from '../pocion.model';
import { PocionService } from '../pocion.service';

@Component({
  selector: 'app-pocion-list',
  templateUrl: './pocion-list.component.html',
  styleUrls: ['./pocion-list.component.css']
})
export class PocionListComponent implements OnInit {

  pociones:Pocion[];

  constructor(private _pocionService: PocionService) { 
    this._pocionService.getAllPociones().subscribe(
      result=>{
        this.pociones = result;
        console.log(this.pociones);
        
      },
      err=>{
        console.log("GetAllPociones" + err);
        
      },
    );
  }

  ngOnInit() {
  }

}
