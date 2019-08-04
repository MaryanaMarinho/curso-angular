import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';

// em modulo de funcionalidade se utiliza o CommonModule e nao o BrowserModule

@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarCursoComponent], // serve para expor o componente para outros modulos
  providers: [CursosService]
})
export class CriarCursoModule { }
