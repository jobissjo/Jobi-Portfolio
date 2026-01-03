import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-section-placeholder',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './section-placeholder.component.html',
    styleUrl: './section-placeholder.component.scss'
})
export class SectionPlaceholderComponent {
    @Input() title: string = '';
    @Input() isSubtle: boolean = false;
}
