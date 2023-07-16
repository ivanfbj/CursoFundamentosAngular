import { Component } from '@angular/core';

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

  // Clase 8 - Introducción al Event Binding de Angular
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  validarEdad(age: number){
    if (age == 0) {
      this.btnDisabledDecreaseAge  = true;
    } else {
      this.btnDisabledDecreaseAge  = false;
    }
  }

  increaseAge(){
    this.person.age += 1;
    this.validarEdad(this.person.age);
  }

  decreasedAge(){
    this.person.age -= 1;
    this.validarEdad(this.person.age);


  }
}
