import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
/* import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component'; */

const appRoutes: Routes = [
  //{ path: 'cursos', component: CursosComponent },
  //{ path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // forRoot apenas no modulo de rotas raiz da aplicacao
  exports: [RouterModule]
})

export class AppRoutingModule {}
