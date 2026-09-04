import { Component, inject } from '@angular/core';
import { HelperService } from '../../service/helper.service';

@Component({
    selector: 'app-about',
    imports: [],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
  private readonly helperService = inject(HelperService);
  readonly showJoTech: boolean = this.helperService.showJoTech;

  abouts: string[] = this.showJoTech
    ? [
        `I'm a full-stack developer and founder of <a href="https://www.jotech.in/" target="_blank" rel="noopener noreferrer" class="bio-link">JoTech</a>, specializing in Python and Angular to engineer robust, high-performance web applications and backend systems.`,
        `My experience spans e-commerce platforms, job portals, distributed architectures, and modern AI engineering. I thrive across the full stack—designing scalable APIs, optimizing database performance, and creating fluid, responsive user interfaces.`,
        `Through my independent software ecosystem at <a href="https://www.jotech.in/" target="_blank" rel="noopener noreferrer" class="bio-link">JoTech</a>, I build practical digital products like Weekly Planner and PocketFlow, develop resilient microservices, and publish engineering guides on modern system design.`
      ]
    : [
        `I'm a full-stack developer specializing in Python and Angular, crafting efficient, scalable, and resilient web solutions.`,
        `My experience spans e-commerce platforms, job portals, and complex CRM systems. I thrive in both frontend and backend development—translating complex business requirements into seamless, intuitive user experiences.`,
        `Beyond full-stack development, I am passionate about cloud technologies, distributed systems, and modern AI engineering, constantly exploring new tools to build smarter, more reliable applications.`
      ];

  skills: string[] = this.showJoTech
    ? ['Python', 'Django', 'FastAPI', 'Angular', 'Docker', 'PostgreSQL', 'JoTech Ecosystem']
    : ['Python', 'Django', 'FastAPI', 'Angular', 'Docker', 'PostgreSQL'];
}
