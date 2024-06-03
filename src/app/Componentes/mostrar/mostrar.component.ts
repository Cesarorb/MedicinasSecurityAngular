import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../../Service/service.service';
import { Medicina } from '../../Dominio/medicina';
import { RespuestaDto } from '../../Dominio/RespuestaDto';

@Component({
  selector: 'app-mostrar',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  service = inject(ServiceService);
  medicinas!: Medicina[];
  respuesta!: RespuestaDto;

  ngOnInit() {
    this.service.mostrar().subscribe(data => {
      this.respuesta = data;
      if (this.respuesta.success === false) {
        alert(this.respuesta.mensaje);
      } else {
        this.medicinas = this.respuesta.object;
        alert(this.respuesta.mensaje);
      }
    });
  }
}
