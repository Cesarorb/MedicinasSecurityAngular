import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RespuestaDto } from '../Dominio/RespuestaDto';
import { Medicina } from '../Dominio/medicina';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  http = inject(HttpClient);
  url_guardar = 'http://192.168.100.173:9000/medicina/guardar';
  url_editar = 'http://192.168.100.173:9000/medicina/editar';
  url_eliminar = 'http://192.168.100.173:9000/medicina/eliminar';
  url_buscar = 'http://192.168.100.173:9000/medicina/buscar';
  url_mostrar = 'http://192.168.100.173:9000/medicina/mostrar';

  guardar(medicina: Medicina) {
    return this.http.post<RespuestaDto>(this.url_guardar, medicina);
  }
  editar(medicina: Medicina) {
    return this.http.post<RespuestaDto>(this.url_editar, medicina);
  }
  eliminar(medicina: Medicina) {
    return this.http.post<RespuestaDto>(this.url_eliminar, medicina);
  }
  buscar(medicina: Medicina) {
    return this.http.post<RespuestaDto>(this.url_buscar, medicina);
  }
  mostrar() {
    return this.http.get<RespuestaDto>(this.url_mostrar);
  }
}
