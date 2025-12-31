import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Atropos from 'atropos';

@Directive({
  selector: '[appAtropos]',
  standalone: true
})
export class AtroposDirective implements AfterViewInit, OnDestroy {
  private instance: any;
  @Input() offset: number = 40;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initAtropos();
    }
  }

  private initAtropos() {
    const isMobile = window.innerWidth <= 768;

    this.instance = Atropos({
      el: this.el.nativeElement,
      activeOffset: this.offset,
      shadowScale: 1.05,
      // Mobile-specific adjustments
      rotateTouch: isMobile ? 'scroll-y' : true, // Allow vertical scroll on mobile
      rotateXMax: isMobile ? 12 : 25, // Reduce tilt depth on mobile
      rotateYMax: isMobile ? 12 : 25,
      highlight: !isMobile, // Reduce glare on mobile
      onEnter: () => {
        // Optional: Ensure logic for activation if needed
      }
    });
  }

  ngOnDestroy() {
    if (this.instance) {
      this.instance.destroy();
    }
  }
}
