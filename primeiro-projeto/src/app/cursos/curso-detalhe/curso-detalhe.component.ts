import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(private cursoService: CursosService) { //isso no parametro eh a injecao de dependencia do CursoService 
    this.nomePortal = 'http://loiane.training';

    //var servico = new CursosService();

    this.cursos = this.cursoService.getCursos();

   }

  ngOnInit() {
  }

}
