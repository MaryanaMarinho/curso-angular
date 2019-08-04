import { CursosService } from './../../../../primeiro-projeto/src/app/cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

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
  }

}
