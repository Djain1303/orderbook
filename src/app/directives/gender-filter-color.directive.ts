import { Directive, Input, Renderer, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGenderFilterColor]'
})
export class GenderFilterColorDirective  implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @Input() appGenderFilterColor: string;

  ngOnInit() {
    if (this.appGenderFilterColor === 'Male') {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', 'green');
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', 'red');
    }
  }

}
