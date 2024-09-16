import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  abouts: string[] = [
    `
    I'm a full-stack developer specializing in Python and Angular, focused on building efficient and scalable web apps. 
    I have experience with both frontend and backend, working on e-commerce sites, job portals, and CRM systems. 
    I'm skilled in Django, FastAPI, SQL, and PostgreSQL, and also know Docker, Git`,

    `I'm learning about machine learning, microservices, and cloud technologies. 
    Whether working alone or with a team, I enjoy solving problems and creating innovative digital experiences. 
    I'm eager to pick up new tools and techniques to keep improving and building better applications.
    `
  ]

}
