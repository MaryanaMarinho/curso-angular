import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  onSubmit(form) {

    // esses dois consoles fazem a mesma coisa
    console.log(form);
    // console.log(this.usuario);

  }

  constructor() { }

  ngOnInit() {
  }

}