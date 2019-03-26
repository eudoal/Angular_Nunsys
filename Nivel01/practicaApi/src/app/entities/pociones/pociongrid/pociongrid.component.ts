import { Component, OnInit, Input } from '@angular/core';
import { Pocion } from '../pocion.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pociongrid',
  templateUrl: './pociongrid.component.html',
  styleUrls: ['./pociongrid.component.css']
})
export class PociongridComponent implements OnInit {

  @Input() public listaPociones:Pocion[];
  @Input() public acciones:boolean;
  
  constructor(private router:Router) {

   }

  ngOnInit() {
    
  }

  verMas(id:number){

    this.router.navigate(['/pocion',id]);
  }
  animacion(pocion:Pocion){
    if(pocion.epica){
      return "imgPocion";
    }else{
      return "img";
    }
  }
}
