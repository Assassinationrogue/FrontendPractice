import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewRef,
} from '@angular/core';

@Directive({
  selector: '[sbPopup]',
})
export class ShopsBeePopupDirective implements OnInit {
  constructor(private elemenRef: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elemenRef.nativeElement,
      'backgroundColor',
      'skyblue'
    );
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elemenRef.nativeElement,
      'backgroundColor',
      '#87CEFA'
    );
  }

  ngOnInit(): void {
    //this.elemenRef.nativeElement.style.backgroundColor = 'green';

    this.renderer.listen(this.elemenRef.nativeElement, 'click', (data) => {
      console.log(data);
    });
  }
}
