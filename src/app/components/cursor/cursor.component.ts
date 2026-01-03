import { Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild, ViewEncapsulation, NgZone, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-cursor',
    imports: [CommonModule],
    template: `
    <div class="cursor-dot" #cursorDot></div>
    <div class="cursor-outline" #cursorOutline></div>
  `,
    styleUrls: ['./cursor.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CursorComponent implements OnInit, OnDestroy {
    @ViewChild('cursorDot', { static: true }) cursorDot!: ElementRef;
    @ViewChild('cursorOutline', { static: true }) cursorOutline!: ElementRef;

    isBrowser: boolean;

    // Cursor position state
    cursorX = 0;
    cursorY = 0;
    outlineX = 0;
    outlineY = 0;

    constructor(
        @Inject(PLATFORM_ID) platformId: Object,
        private ngZone: NgZone
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit() {
        if (this.isBrowser) {
            this.setupCursor();
        }
    }

    setupCursor() {
        this.ngZone.runOutsideAngular(() => {
            // Initial position off-screen
            this.cursorX = -100;
            this.cursorY = -100;
            this.outlineX = -100;
            this.outlineY = -100;

            const animate = () => {
                // Smooth follow for outline
                const distX = this.cursorX - this.outlineX;
                const distY = this.cursorY - this.outlineY;

                this.outlineX += distX * 0.15; // Speed of follow
                this.outlineY += distY * 0.15;

                if (this.cursorDot && this.cursorOutline) {
                    this.cursorDot.nativeElement.style.transform = `translate(${this.cursorX}px, ${this.cursorY}px)`;
                    this.cursorOutline.nativeElement.style.transform = `translate(${this.outlineX}px, ${this.outlineY}px)`;
                }

                requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);

            document.addEventListener('mousemove', (e) => {
                this.cursorX = e.clientX;
                this.cursorY = e.clientY;
            });

            // Hover effects
            document.addEventListener('mouseover', (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                const isHoverable = target.tagName.toLowerCase() === 'a' ||
                    target.tagName.toLowerCase() === 'button' ||
                    target.closest('a') ||
                    target.closest('button') ||
                    target.classList.contains('clickable');

                if (isHoverable) {
                    this.cursorOutline.nativeElement.classList.add('hovered');
                    this.cursorDot.nativeElement.classList.add('hovered');
                } else {
                    this.cursorOutline.nativeElement.classList.remove('hovered');
                    this.cursorDot.nativeElement.classList.remove('hovered');
                }
            });

            document.addEventListener('mousedown', () => {
                this.cursorOutline.nativeElement.classList.add('clicked');
            });

            document.addEventListener('mouseup', () => {
                this.cursorOutline.nativeElement.classList.remove('clicked');
            });
        });
    }

    ngOnDestroy() {
        // Cleanup listeners if necessary, though they are on document and component is likely singular.
        // Usually good practice to store references and remove them.
    }
}
