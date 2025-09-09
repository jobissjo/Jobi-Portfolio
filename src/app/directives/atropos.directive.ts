import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import Atropos from 'atropos';

@Directive({
  selector: '[appAtropos]',
  standalone: true
})
export class AtroposDirective implements AfterViewInit, OnDestroy {
  private instance: any;
  @Input() offset: number = 40;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.instance = Atropos({
      el: this.el.nativeElement,
      activeOffset: this.offset,
      shadowScale: 1.05,
      rotateXMax:25,
      rotateYMax:25
    });
  }

  ngOnDestroy() {
    if (this.instance) {
      this.instance.destroy();
    }
  }

}
