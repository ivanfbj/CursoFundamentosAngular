import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  // Curso de Angular: Componentes y Servicios
  // Clase 3 - Uso de Inputs
  /* Para poder pasarle un valor desde el padre (app.component.html) al hijo (img.component.html)
    se debe usar el decorador @Input para que el atributo de este componente pueda recibir la información.
    por lo cual el atributo "img" se le cambiará el valor por el que se le envíe desde el padre (app.component.html)
  */
  @Input() img: string = 'valor init'

  constructor() { }

  ngOnInit(): void {

  }
  // Curso de Angular: Componentes y Servicios
  //  Clase 4 - Uso de Outputs
  imageDefault = './assets/images/default.jpg';

  /*
    Si el elemento "<img width="200" (error)="imgError()" [src]="img" *ngIf="img; else elseImg">"
    del HTML genera error me traera esta función de "imgError"
  */
  imgError() {
    this.img = this.imageDefault;
  }

}
