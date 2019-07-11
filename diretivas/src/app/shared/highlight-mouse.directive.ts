import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  // o HostListener vai ficar escultando evento no hospedeiro da diretiva, nesse caso é a tag do html
  @HostListener('mouseenter') onMouseOver() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    //   );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'white'
    //   );
    this.backgroundColor = 'white';
  }

  // o HostBinding permite que faça o binding, a associaçao de um atributo ou uma classe do html para uma variavel
  // se nao precisar de manipulaçao utiliza assim
  // @HostBinding('style.backgroundColor') backgroundColor: string;

  // se precisar de alguma manipulaão utiliza assim
  @HostBinding('style.backgroundColor') get setColor() {
    // codigo extra
    return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor(
    // private elementRef: ElementRef,
    // private renderer: Renderer2
    ) { }

}
