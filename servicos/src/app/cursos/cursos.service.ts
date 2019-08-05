import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

  // com esse objeto é possivle emitir eventos para que a aplicacao esculte
  // e sempre que tier mudanças e um novo evento for emitido é possivel fazer alguma coisa
  emitirCursoCriado = new EventEmitter<string>();

  // quando usa o static nao precisa da instancia da classe pra acessar essa variavel
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular2', 'Java', 'Phonegap'];

  constructor(private logService: LogService) {
    console.log('CursoService');
  }


  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string) {

    this.logService.consoleLog(`Criando um novo curso ${curso}`); // é a mesma coisa que ('Criando um novo curso' + curso);
    this.cursos.push(curso);

    // sempre que essa funcao for chamada ela vai emitir uma informacao
    // que no caso vai ser o curso.
    this.emitirCursoCriado.emit(curso);

    CursosService.criouNovoCurso.emit(curso);
  }
}
