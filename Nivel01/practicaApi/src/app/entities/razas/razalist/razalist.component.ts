import { Component, OnInit } from '@angular/core';
import { RazaService } from '../raza.service';
import { Raza } from '../raza.model';

@Component({
  selector: 'app-razalist',
  templateUrl: './razalist.component.html',
  styleUrls: ['./razalist.component.css']
})
export class RazalistComponent implements OnInit {

  razas:Raza[];
  constructor(private _razaService: RazaService) { 
    this._razaService.getAllRazas().subscribe(
      result=>{
        this.razas = result;
      },
      err=>{
        console.log(err)
      },
    );
  }

  ngOnInit() {
  }

}
