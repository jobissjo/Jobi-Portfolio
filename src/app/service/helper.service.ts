import { inject, Injectable } from '@angular/core';
import { Contact, Experience, Project, Resume, Skill, SkillCategory } from '../datatypes.types';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private viewportScroller: ViewportScroller = inject(ViewportScroller);

  constructor() { }

  scrollToElement(id:string){
    this.viewportScroller.scrollToAnchor(id);
  }

  getProjects(){
    return this.projects
  }



  getExperience(){
    return this.experiences;
  }

  getContacts(){
    return this.contacts;
  }

  getResume(){
    return this.resume;
  }

  

  getSkills(category:string):Skill[]{
    if (category == 'all')
      return this.skills;
    else{
      let filtered_skills =  this.skills.filter(skill => {
        return skill.category == category;
      })

      if(filtered_skills.length > 0){
        return filtered_skills
      }
      else{
        return []
      }
    }
  }

  private skills: Skill[] = [
    {
      name: 'Python',
      imageUrl: 'img/skills/python.png',
      level: 90,
      category: SkillCategory.Programming
    },
    {
      name: 'Django',
      imageUrl: 'img/skills/django.png',
      level: 70,
      category: SkillCategory.Framework
    },
    {
      name: 'DRF',
      imageUrl: 'img/skills/drf.png',
      level: 85,
      category: SkillCategory.Framework
    },
    {
      name: 'JavaScript',
      imageUrl: 'img/skills/js.png',
      level: 70,
      category: SkillCategory.Programming
    },
    {
      name: 'TypeScript',
      imageUrl: 'img/skills/ts.png',
      level: 60,
      category: SkillCategory.Programming
    },
    {
      name: 'Angular',
      imageUrl: 'img/skills/angular.png',
      level: 70,
      category: SkillCategory.Framework
    },
    {
      name: 'Sqlite',
      imageUrl: 'img/skills/sqlite.png',
      level: 80,
      category: SkillCategory.Database
    },
    {
      name: 'PostgreSQL',
      imageUrl:'img/skills/postgreSQL.png',
      level:75,
      category:SkillCategory.Database
    },
    {
      name: 'MongoDB',
      imageUrl:'img/skills/mongodb.png',
      level:50,
      category:SkillCategory.Database
    },
    {
      name: 'HTML',
      imageUrl:'img/skills/html.png',
      level: 80,
      category: SkillCategory.TechStack,
    },
    {
      name: 'CSS',
      imageUrl: 'img/skills/css.png',
      level: 70,
      category:SkillCategory.TechStack
    },
    {
      name: 'Bootstrap',
      imageUrl: 'img/skills/bootstrap.png',
      level: 70,
      category: SkillCategory.TechStack
    },
    {
      name: 'Git',
      imageUrl: 'img/skills/git.png',
      level: 65,
      category: SkillCategory.Tool
    },
    {
      name: 'Docker',
      imageUrl: 'img/skills/docker.png',
      level: 50,
      category: SkillCategory.Tool
    },
    {
      name : 'FastAPI',
      imageUrl: 'img/skills/fastAPI.png',
      level: 50,
      category: SkillCategory.Framework
    },
    {
      name: 'Litestar',
      imageUrl : 'img/skills/litestar.png',
      level: 30,
      category: SkillCategory.Framework
    }
  ]

  private experiences : Experience[] = [
    {
      position: 'Full Stack Python Developer Intern',
      companyName:'Inmakes Infotech Pvt Ltd',
      startedDate: new Date('2022-06-22'),
      endedDate: new Date('2022-09-22'),
      workAchievements: [
         "Built an e-commerce project using Django."
      ]
    },
    {
      position: 'Python Developer',
      companyName:'Mentor Thesis',
      startedDate: new Date('2023-03-06'),
      endedDate: new Date('2023-04-15'),
      workAchievements: [
        "Implemented a movie recommendation system."
      ]
    },
    {
      position: 'Python Developer',
      companyName:'Senscript Technologies',
      startedDate: new Date('2024-05-13'),
      endedDate: new Date(),
      workAchievements: [
        "Worked on the backend of an e-commerce project using Django and DRF.",
        "Collaborated with Angular and React developers."
      ]
    },

  ]

  private contacts:Contact[] = [
    {
      name: 'mail',
      link: 'mailto:jobisjobi1234@gmail.com',
      iconStyle: 'fa-solid fa-envelope',
      title:"Mail to Jobi"
    },

    {
      name: 'github',
      link: 'https://github.com/jobissjo',
      iconStyle: 'fa-brands fa-github',
      title:"Jobi Github"
    },
    {
      name: 'linkedin',
      link: 'https://in.linkedin.com/in/jobiss12',
      iconStyle: 'fa-brands fa-linkedin',
      title:"Jobi Linkedin"
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/__mr_unknown_/',
      iconStyle: 'fa-brands fa-instagram',
      title:"Jobi Instagram"
    },
  ]

  private resume:Resume = {
    name: 'Jobi Resume',
    file: 'jobiss.pdf'
  }

  private projects: Project[] = [
    {
      name: "MERN Real Time Chat Project",
      projectUrls: [
        {
          title: "Quick Chat Server",
          githubUrl : "https://github.com/jobissjo/mern-real-time-chat",
          gitIconUrl: "fa-brands fa-github",
          demoIcon: "fa-solid fa-arrow-up-right-from-square",
          hostingUrl : "https://github.com/jobissjo/mern-real-time-chat",
        },
        {
          title: "Quick Chat Client",
          githubUrl : "https://github.com/jobissjo/mern-real-time-chat-client",
          gitIconUrl: "fa-brands fa-github",
          demoIcon: "fa-solid fa-arrow-up-right-from-square",
          hostingUrl : "https://github.com/jobissjo/mern-real-time-chat-client",
        }
      ],
      description: "This Job Portal project is a using frontend react and backend for Express js",
      features: [
        "Mobile responsive",
        "React with Vite tooling"
      ],
      startDate: "November 2024",
      endDate: "Present",
    },
    {
    name: "Job Portal Project",
    description: "This Job Portal project is a using frontend angular and backend fastapi",
    features: [
      "Angular 16 to Angular 18 upgraded",
      "Mobile responsive"
    ],
    startDate: "January 2023",
    endDate: "June 2023",
    projectUrls: [
      {
        title: "Job Portal Full Version",
        githubUrl : "https://github.com/jobissjo/job-sera",
        gitIconUrl: "fa-brands fa-github",
        demoIcon: "fa-solid fa-arrow-up-right-from-square",
        hostingUrl : "http://localhost",
      }
    ]
  },
]
}
