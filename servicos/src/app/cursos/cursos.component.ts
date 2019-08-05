import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService] // para ter uma estancia separada de servico e exclusiva para esse componente
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    // this.cursosService = new CursosService();
    //this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    // o subscribe é que nem o do youtube, qd a gente se inscreve em um canal
    // a gente é notificado quando o canal lança um video novo.
    // aqui acontece a mesma coisa, quando nos increvemos
    // no emissor de eventos(emitirCursoCriado) sempre seremos notificados
    // quando mudar o valor
    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}
