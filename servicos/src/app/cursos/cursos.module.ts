import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';

// em modulo de funcionalidade se utiliza o CommonModule e nao o BrowserModule

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent] // serve para expor o componente para outros modulos
  //providers: [CursosService]
})
export class CursosModule { }
