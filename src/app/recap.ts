// Curso de Fundamentos de Angular
// Clase 5 - Conceptos básicos de TypeScript para usar Angular

// Se puede declara una variable sin idicar el tipo de datos de la variable.
const username = 'ivanfbj';
// Se puede definir el tipo de datos de una variable
const username2: string = 'ivanfbj';
// Se puede indicar uno o más tipos de datos para la misma variable
const username3: string | number = 'ivanfbj';

/*Se crea una funciona de tipo Arrow Function, en la cual se establece el tipo de datos
  en los parametros*/
const sum = (a: number, b: number) => {
  return a + b;
}

sum(1, 3);

/*Se crea una clase con sus respectivos atributos
  y se crea el contructor.
  Para definir un atributo de forma privada y que solo se visualice desde la misma clase
  se indica con la palabra "private"
  */
class Person {
  age: number;
  lastName: string;
  private atributoPrivado: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
    this.atributoPrivado = '';
  }
}

const ivan = new Person(25, 'Orrego')
//La propieda 'atributoPrivado' es privada y solo es accesible dentro de la clase 'Person'
//ivan.atributoPrivado; //Error

/* Para ahorrar la declaración de las variables y luego la definición del constructor
  lo que se puede hacer es desde el constructor realizar la declaración de las variables
*/

class Person2 {
  constructor(public age: number, public lastName: string, private atributoPrivado: string = '') { }
}
const person2 = new Person2(20, 'Correa');
