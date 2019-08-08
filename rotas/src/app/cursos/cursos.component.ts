import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    // pegando o parametro da url tipo - /?pagina=1
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  // mudando o valor da pagina na url
  proximaPagina() {
    //this.pagina++;
    this.router.navigate(
      ['/cursos'],
      { queryParams: {'pagina': ++this.pagina} }
    );
  }

}
