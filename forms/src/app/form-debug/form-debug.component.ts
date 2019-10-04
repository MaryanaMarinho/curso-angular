import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  // criando variavel para receber o form de outro component
  // la no html do tamplate-form ela esta sendo usada como [form]="f"
  // onde f é a variavel do form
  @Input() form;

  constructor() { }

  ngOnInit() {
  }

}
