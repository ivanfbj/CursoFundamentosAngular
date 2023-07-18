import { Component } from '@angular/core';
import { Product } from './product.model';//Clase 13 - *ngFor para arrays

/*División de responsabilidad
Un componente de Angular se divide en tres archivos:
uno para el código TypeScript,
otro para el código HTML y
uno más para el código CSS.
*/
/*
Angular usa el concepto de decoradores para modificar el comportamiento de las clases.
La clase AppComponent implementa el decorador @Component()
para indicarle a Angular que esta clase será un componente.
Dentro de este decorador, puedes observar el selector
del componente (un nombre para el mismo),
el template HTML y la hoja de estilos que usará.
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/*
Finalmente, dentro de la clase puedes declarar tus propiedades
y métodos como en cualquier clase de la programación orientada a objetos.
Tenemos una propiedad llamada "name" que es del tipo string.
Podemos mostrar el valor de esta variable en el HTML con una interpolación:
*/
/*Es importante que tengas en cuenta la visibilidad de los atributos y métodos de una clase.
  Si estos llegaran a ser private, no podrás usarlo en el HTML
  Las variables deben ser públicas para poder ser compartidas al template. */
export class AppComponent {
  name = 'Ivan';
  age = 18;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  btnDisabledDecreaseAge = false;

  person = {
    name: 'Camila',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  };

  // Curso de Fundamentos de Angular
  // Clase 8 - Introducción al Event Binding de Angular
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  validarEdad(age: number) {
    if (age == 0) {
      this.btnDisabledDecreaseAge = true;
    } else {
      this.btnDisabledDecreaseAge = false;
    }
  }

  increaseAge() {
    this.person.age += 1;
    this.validarEdad(this.person.age);
  }

  decreasedAge() {
    this.person.age -= 1;
    this.validarEdad(this.person.age);
  }

  // Curso de Fundamentos de Angular
  // Clase 9 - Otros eventos que puedes escuchar
  // En este caso el parametro de entrada es un evento nativo del elemento html para poder interactuar con sus funcionalidades
  valueScrollTop: number = -1;
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    this.valueScrollTop = element.scrollTop;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  // Curso de Fundamentos de Angular
  // Clase 12 - Uso de *ngFor
  names: string[] = ['Nico', 'Juli', 'Santi']
  newName = '';

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  // Curso de Fundamentos de Angular
  // Clase 13 - *ngFor para arrays
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  // Curso de Fundamentos de Angular
  // Clase 17 - Class and style
  widthImg = 10;

  // Curso de Fundamentos de Angular
  // Clase 18 - NgClass y NgStyle
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  // Curso de Fundamentos de Angular
  // Clase 19 - Crear un formulario
  register = {
    name: '',
    email: '',
    password: ''
  }

  // Curso de Fundamentos de Angular
  // Clase 19 - Crear un formulario
  onRegister(){
    console.log(this.register);
    window.alert('El usuario se a registrado exitosamente');
  }
  // Curso de Angular: Componentes y Servicios
  // Clase 3 - Uso de Inputs
  imgPadre = 'Valor inicial en el componente padre app.component.ts';

}



