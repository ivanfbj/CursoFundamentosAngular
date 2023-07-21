import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  /*Para configurar que el componente hijo comunique la información con el componente padre
    se requiere de hacer uso de "Output" y también se requiere el "EventEmitter" que es una forma enviar el Output y enviarlo al padre.
   */
  // En el componente se indica que va a transmitir información indicandole de que tipo, en este caso <string>
  @Output() loaded = new EventEmitter<string>();

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

  //  Se implementa el Event Binding para validar si la imagen fue cargada correctamente con el evento "(load)"
  imgLoaded() {
    console.log('Log del componente hijo, img.component.')
    // Con la siguiente linea se indica de que este Evento se va a imitir para poder enviar información al padre.
    // En este caso, si la imagen cargó se transmité la URL de la imagen
    this.loaded.emit(this.img);
  }

}
