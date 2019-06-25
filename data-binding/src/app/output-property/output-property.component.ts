import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor:number = 0; //recebendo valor do componente pai para o componente filho

  @Output() mudouValor = new EventEmitter(); // expor o valor do componente filho para o componente pai

  @ViewChild('campoInput',  { static: true }) campoValorInput: ElementRef;

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor});
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
