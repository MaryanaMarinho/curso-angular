import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  // com esse objeto é possivle emitir eventos para que a aplicacao esculte
  // e sempre que tier mudanças e um novo evento for emitido é possivel fazer alguma coisa
  emitirCursoCriado = new EventEmitter<string>();

  // quando usa o static nao precisa da instancia da classe pra acessar essa variavel
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular2', 'Java', 'Phonegap'];

  constructor() {
    console.log('CursoService');
  }


  getCursos() {
    return this.cursos
  }

  addCurso(curso: string) {
    this.cursos.push(curso);

    // sempre que essa funcao for chamada ela vai emitir uma informacao
    // que no caso vai ser o curso.
    this.emitirCursoCriado.emit(curso);

    CursosService.criouNovoCurso.emit(curso);
  }
}
