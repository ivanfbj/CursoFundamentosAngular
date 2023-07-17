# Curso de Fundamentos de Angular

**[Instalar Node.JS](https://nodejs.org/es)**:

**Comando para verificar la versión de Node.JS:**  
`node -v`

**Comando para verificar la versión del manejador de paquetes instalado que viene con Node.JS:**  
`npm -v`

**Comando para instalar el cliente de comandos de Angular de forma global en el equipo:**  
`npm install -g @angular/cli`

**Comando para verificar la versión del  cliente de comando de Angular instalado:**  
`ng version`  
(Este comando ejecutado dentro de la carpeta del proyecto indica las versiones y las dependencias del proyecto)

**Comando para crear proyecto nuevo en Angular:**  
ng new NombreDelProyecto  
`ng new CursoFundamentosAngular`

 **Comando para ejecutar el proyecto de Angular creado:**  
`ng serve --open`  
otra alternativa es  
`ng serve -o`

**Comando para ejecutar el proyecto de Angular e indicarle el puerto por el cual se requiere iniciar:**  
`ng serve -o --port=3500`
___

## Curso de Angular Componentes y Servicios

**Temas del curso:**

- Componentes en Angular
- Comunicación entre componentes
- Ciclo de vida de un componente
- Servicios en Angular
- Inyección de dependencias
- Consumo de datos provenientes de una API
- Pipes y Directivas

**Componente en Angular:**

Un componente es una pieza de software con una responsabilidad única y una estructura y funcionalidad determinada, además de ser reutilizable.  

Es una manera de dividir tu aplicación de una forma escalable para no tener todo en un solo archivo. Por ejemplo, un componente para el header, otro para el footer, uno más para el menú, etc.  

Componentes en Angular
Puedes crear tu primer componente en Angular utilizando el comando  
`ng generate component nombreComponente`  
o en su forma corta  
`ng g c nombreComponente`  
Para este proyecto el ejemplo es `ng g c nombreCarpeta/nombreComponente`  
`ng g c components/img`
