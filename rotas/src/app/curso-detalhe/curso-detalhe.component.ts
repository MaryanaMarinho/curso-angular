import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string;
  incricao: Subscription;

  constructor(private route: ActivatedRoute) {

    // pegando o parametro id da rota
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.incricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
  }

  // como boas praticas sempre que nos inscrevermos em alguma coisa
  // devemos nos desinscrever qd o componente for destruido
  ngOnDestroy() {
    this.incricao.unsubscribe();
  }

}
