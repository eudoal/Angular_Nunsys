import { Component, OnInit } from '@angular/core';
import { Pocion } from '../pocion.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PocionService } from '../pocion.service';

@Component({
  selector: 'app-pocion-edit',
  templateUrl: './pocion-edit.component.html',
  styleUrls: ['./pocion-edit.component.css']
})
export class PocionEditComponent implements OnInit {

  pocion: Pocion;
  id: string;
  imgURL: string | ArrayBuffer;
  imagePath: string;

  constructor(private route: ActivatedRoute, private router: Router, private _pocionService: PocionService) {
    this.route.paramMap.subscribe(
      resut => {
        this.id = resut.get("id");
      }
    );

  }

  ngOnInit() {
    if (+this.id === 0) {
      this.pocion = new Pocion();
      this.pocion.id = 0;
    }
    else {
      this._pocionService.getPocionById(+this.id).subscribe(
        result => {
          this.pocion = result;
        }

      );
    }
  }

  borrarPocion(id: number) {
    this._pocionService.borrarPocion(id).subscribe(
      result=>{
        this.router.navigate(['/pociones']);

      },
      err=>{
        console.log("err" +err);
        
      }
    );
  }

  guardarPocion(pocion: Pocion){
    if(pocion.id == 0){
      //llamamos a post
      this.pocion.imagen = this.imgURL;
      console.log(pocion.imagen);
      
      this._pocionService.insertarPocion(pocion).subscribe(
        result=>{
          this.router.navigate(['/pociones']);
        },
        error=>{
          alert("no vaaa")
        }
      );
    }else{
      //llamamaos a put
      if(this.imgURL){
        this.pocion.imagen = this.imgURL;
      }

      this._pocionService.editarPocion(pocion).subscribe(
        result=>{
          this.router.navigate(['/pociones']);
        },
        error=>{
          alert("no vaaa")
        }

      );

    }

  }



  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }


}
