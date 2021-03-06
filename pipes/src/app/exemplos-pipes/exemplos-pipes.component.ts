import { Observable, interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { reject } from 'q';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithsms',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.ci/glgjRP'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  addCurso(valor) {
    this.livros.push(valor);
    console.log(this.livros);

  }

  // maneira correta de fazer filtros é por funcao
  // nao faça filtro ou order by atravez de pipes
  obterCursos() {

    if (this.livros.length === 0 || this.filtro === undefined
        || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v) =>{
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0) {
        return true;
      }

      return false;
    });
  }

  // pipe assincrono com promessa
  valorAsync = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Valor assincrono'), 2000)
  });

  // pipe assincrono com programacao reativa
  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assincrono 2'));

  constructor() { }

  ngOnInit() {
  }

}
