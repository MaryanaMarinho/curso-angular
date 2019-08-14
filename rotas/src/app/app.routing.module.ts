import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
/* import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component'; */

const appRoutes: Routes = [
  {
    path: 'cursos',
    loadChildren: './cursos/cursos.module#CursosModule',
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  }, // lazy loading

  {
    path: 'alunos',
    loadChildren: './alunos/alunos.module#AlunosModule',
    canActivate: [AuthGuard],
    //canActivateChild: [AlunosGuard]
    canLoad: [AuthGuard]
  }, // lazy loading

  //{ path: 'cursos', component: CursosComponent },
  //{ path: 'curso/:id', component: CursoDetalheComponent },

  {
    path: 'login',
    component: LoginComponent
  },
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', component: PaginaNaoEncontradaComponent } // canActivate: [AuthGuard] voltaria para a pagina de login se nao encontrasse a rota que o usuario digitou
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // forRoot apenas no modulo de rotas raiz da aplicacao
  exports: [RouterModule]
})

export class AppRoutingModule {}
