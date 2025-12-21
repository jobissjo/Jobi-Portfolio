import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  // Split into shorter, digestible chunks
  abouts: string[] = [
    `I'm a full-stack developer specializing in Python and Angular, crafting efficient and scalable web solutions.`,

    `My experience spans e-commerce platforms, job portals, and complex CRM systems. I thrive in both frontend and backend development, translating complex requirements into seamless user experiences.`,

    `Beyond coding, I am passionate about cloud technologies and microservices. I constantly explore new tools to build smarter, more resilient applications.`
  ];

  // Highlights for visual engagement
  skills: string[] = ['Python', 'Django', 'FastAPI', 'Angular', 'Docker', 'PostgreSQL'];
}

