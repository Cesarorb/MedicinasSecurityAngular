import { Routes } from '@angular/router';
import { MostrarComponent } from './Componentes/mostrar/mostrar.component';
import { BuscarComponent } from './Componentes/buscar/buscar.component';
import { GuardarComponent } from './Componentes/guardar/guardar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';

export const routes: Routes = [
    { path: 'mostrarRoute', component: MostrarComponent },
    { path: 'buscarRoute', component: BuscarComponent },
    { path: 'guardarRoute', component: GuardarComponent },
    { path: 'editarRoute', component: EditarComponent },
    { path: 'eliminarRoute', component: EliminarComponent },
    { path: '', redirectTo: 'mostrarRoute', pathMatch: 'full' }
];
