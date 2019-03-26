
import { Component, OnInit, Input } from '@angular/core';
import { Raza } from '../raza.model';
import { RazaService } from '../raza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-razacard',
  templateUrl: './razacard.component.html',
  styleUrls: ['./razacard.component.css']
})
export class RazacardComponent implements OnInit {

  ruta: string;
  @Input() raza:Raza;

  constructor(private router:Router, private _raceService:RazaService) { 

   //this.ruta = "http://localhost:8080/api/razas/" + this.obtenerEscudo(this.raza) +"/"+this.raza.foto;
   console.log(this.raza);
  }

  ngOnInit() {

  }

  obtenerEscudo(raza:Raza): string{
    if(raza.bando == Number(0) ){
      return 'alianza';
    }else{
      return 'horda';
    }
  }
  verMas(id:number){
    this.router.navigate(['/razas',id]);
  }

}
