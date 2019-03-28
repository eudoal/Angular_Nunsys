import { Component, OnInit, Input } from '@angular/core';
import { Pocion } from '../pocion.model';
import { PocionService } from '../pocion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pocion-grid',
  templateUrl: './pocion-grid.component.html',
  styleUrls: ['./pocion-grid.component.css']
})
export class PocionGridComponent implements OnInit {

  @Input() listaPociones: Pocion[];
  @Input() acciones: boolean;

  constructor(private router: Router, private _pocionService: PocionService) { }

  ngOnInit() {
  }

  //animacion si es epica
  animacion(epic: boolean) {
    if (epic) {
      return "imgPocion";
    }
    else {
      return "img";
    }
  }

  verMas(id: number) {
  }

  borrarPocion(id: number) {
    this._pocionService.borrarPocion(id).subscribe(
      rest=>{
        this.listaPociones = rest;

      },
      err=>{
        console.log("err" +err);
        
      }
    );
  }

  editarPocion(id: number){
    this.router.navigate(['/ficha',id]);
  }

}
