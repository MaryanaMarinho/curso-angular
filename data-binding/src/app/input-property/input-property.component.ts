import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso: string = ''; //expondo a variavel para ser usada em outro componente por meio do []

  constructor() { }

  ngOnInit() {
  }

}
