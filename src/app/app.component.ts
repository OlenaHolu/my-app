import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from "./empleado/empleado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmpleadosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'my-app';
  saludo = 'Hola alumnos! ¿Qué tal estáis?';
}
