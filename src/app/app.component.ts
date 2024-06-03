import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MostrarComponent } from './Componentes/mostrar/mostrar.component'; // Ajuste la ruta según la ubicación de mostrar.component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MostrarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MedicinasSecurityAngular';
  router = inject(Router);
  mostrar_medicinas(){
    console.log("Mostrando medicinas");
  }
}
