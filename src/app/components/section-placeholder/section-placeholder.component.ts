import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-section-placeholder',
    imports: [],
    templateUrl: './section-placeholder.component.html',
    styleUrl: './section-placeholder.component.scss'
})
export class SectionPlaceholderComponent {
    @Input() title: string = '';
    @Input() isSubtle: boolean = false;
}
