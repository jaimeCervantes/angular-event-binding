import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string;
  resultado: number = 0;
  constructor() {
    this.nombre = 'Jaime Cervantes Velasco';
  }
  
  cambiarNombre (name) {
    this.nombre = this.nombre.split('').reverse().join('');;
  }
}
