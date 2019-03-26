import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RazaService } from '../raza.service';
import { Raza } from '../raza.model';

@Component({
  selector: 'app-razadetail',
  templateUrl: './razadetail.component.html',
  styleUrls: ['./razadetail.component.css']
})
export class RazadetailComponent implements OnInit {

  id: string;
  raza:Raza;
  constructor(private route:ActivatedRoute, private _razaService:RazaService) { 
    this.route.paramMap.subscribe(x =>{
      this.id = x.get("id");
      });

      this._razaService.getRazaById(+this.id).subscribe(
        result=>{
          this.raza = result;
        },
        err=>{
          console.log(err)
        },
      );


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

}
