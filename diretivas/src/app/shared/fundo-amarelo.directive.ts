import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // console.log(this.elementRef);
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';

    // essa linha de baixo faz a mesma coisa que a linha de cima, so que de maneira segura e respeitando as boas praticas
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');

  }

}
