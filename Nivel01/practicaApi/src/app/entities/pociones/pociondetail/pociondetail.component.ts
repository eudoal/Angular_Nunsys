import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PocionService } from '../pocion.service';
import { Pocion } from '../pocion.model';

@Component({
  selector: 'app-pociondetail',
  templateUrl: './pociondetail.component.html',
  styleUrls: ['./pociondetail.component.css']
})
export class PociondetailComponent implements OnInit {

  id: string;
  pocion:Pocion;
  constructor(private route:ActivatedRoute, private _pocionService:PocionService) {

    this.route.paramMap.subscribe(x =>{
      this.id = x.get("id");
      });

    this._pocionService.getPocionById(+this.id).subscribe(
      result=>{
          console.log(result);
          this.pocion = result;
      },
      err=>{
        console.log(err);
      }
    );
   }

  ngOnInit() {
  }

}
