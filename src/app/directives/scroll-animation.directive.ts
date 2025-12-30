import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HelperService } from '../service/helper.service';
import { Subscription, take } from 'rxjs';

@Directive({
    selector: '[appScrollAnimation]',
    standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
    @Input() animationDelay = 0; // Optional delay for staggering

    private observer: IntersectionObserver | undefined;
    private isAnimated = false;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        private helper: HelperService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            // Add initial hidden class
            this.renderer.addClass(this.el.nativeElement, 'scroll-hidden');

            // Apply delay if provided
            if (this.animationDelay > 0) {
                this.renderer.setStyle(this.el.nativeElement, 'transition-delay', `${this.animationDelay}ms`);
            }

            this.setupObserver();
        }
    }

    private setupObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isAnimated) {
                    // Check for fast scroll
                    this.helper.isFastScroll$.pipe(take(1)).subscribe(isFast => {
                        if (isFast) {
                            // If fast scroll, just show immediately without fancy animation
                            this.playAnimation('animate-visible');
                        } else {
                            // Check direction
                            this.helper.scrollDirection$.pipe(take(1)).subscribe(direction => {
                                if (direction === 'down') {
                                    this.playAnimation('fade-in-up');
                                } else {
                                    this.playAnimation('fade-in-down');
                                }
                            });
                        }
                    });
                }
            });
        }, {
            threshold: 0.15, // Trigger when 15% visible
            rootMargin: '0px 0px -50px 0px' // Slightly offset to ensure it's actually entering
        });

        this.observer.observe(this.el.nativeElement);
    }

    private playAnimation(animationClass: string) {
        this.isAnimated = true;
        this.renderer.addClass(this.el.nativeElement, animationClass);

        // Optional: Stop observing after animation
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
