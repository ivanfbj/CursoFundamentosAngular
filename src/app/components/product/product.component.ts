import { Component } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  // Por buenas practicas se debe tipar el producto para saber que se va a esperar del producto.
  // Por lo cual se crea una carpeta llamada "models" la cual va a contener un modelo particular para el producto.
  /* Se realiza la importación del modelo creado y luego se indica de que tipo quiero que se mi variable "product"
    quedaria de la siguiente manera "product: Product = {}".
    Con esto ya quedó el producto de forma tipada.
  */
  product: Product = {
    id: '1',
    name: 'producto 1',
    image: './assets/images/toy.jpg',
    price: 100
  }

}
