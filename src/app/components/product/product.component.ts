import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

product = {
  name: 'producto 1',
  image: './assets/images/toy.jpg',
  price: 100
}

}
