import { Component, OnInit } from '@angular/core';
import { Pocion } from '../pocion.model';
import { PocionService } from '../pocion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pocion-list',
  templateUrl: './pocion-list.component.html',
  styleUrls: ['./pocion-list.component.css']
})
export class PocionListComponent implements OnInit {

  pociones: Pocion[];

  constructor(private router:Router, private _pocionService: PocionService) {
    this._pocionService.getAllPociones().subscribe(
      result => {
        this.pociones = result;
        console.log(this.pociones);

      },
      err => {
        console.log("GetAllPociones" + err);

      },
    );
  }

  ngOnInit() {
  }

  nuevaPocion(){
    this.router.navigate(['/ficha',0])
  }
}
