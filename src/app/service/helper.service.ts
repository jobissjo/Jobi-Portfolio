import { inject, Injectable } from '@angular/core';
import { Article, ArticleCategory, Contact, Experience, Project, Resume, Skill, SkillCategory } from '../datatypes.types';
import { ViewportScroller } from '@angular/common';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private readonly viewportScroller: ViewportScroller = inject(ViewportScroller);
  private readonly darkModeSubject = new BehaviorSubject<boolean>(true);
  darkMode$ = this.darkModeSubject.asObservable();

  constructor() { }

  scrollToElement(id:string){
    this.viewportScroller.scrollToAnchor(id);
  }

  toggleDarkMode() {
    const currentValue = this.darkModeSubject.value;
    this.darkModeSubject.next(!currentValue);
    document.body.classList.toggle('dark-theme', !currentValue);
  }

  isDarkMode(): boolean {
    return this.darkModeSubject.value;
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

  private readonly skills: Skill[] = [
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
      level: 70,
      category: SkillCategory.Framework
    },
    {
      name: 'Litestar',
      imageUrl : 'img/skills/litestar.png',
      level: 30,
      category: SkillCategory.Framework
    }
  ]

  private readonly experiences : Experience[] = [
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

  private readonly contacts:Contact[] = [
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

  private readonly resume:Resume = {
    name: 'Jobi Resume',
    file: 'jobiss.pdf'
  }

  private readonly projects: Project[] = [
    {
      name: "Personal Blog",
      description: "This is project is about track learning progress of the user and track the application status",
      features: [
        "Backend built using FastAPI and MongoDB",
        "Frontend built using React and Tailwind CSS"
      ],
      startDate: "November 2025",
      endDate: "Present",
      projectUrls:[
        {
          title: 'Frontend',
          githubUrl : "https://github.com/jobissjo/blog-frontend.git",
          gitIconUrl: "fa-brands fa-github",
          demoIcon: "fa-solid fa-arrow-up-right-from-square",
          hostingUrl : "https://jotechblog.netlify.app/",
        },
        {
          title: 'Backend',
          githubUrl : "https://github.com/jobissjo/blog-fastapi.git",
          gitIconUrl: "fa-brands fa-github",
          demoIcon: "fa-solid fa-arrow-up-right-from-square",
          hostingUrl : "https://blog-fastapi-drab.vercel.app/",
        }
      ]
    },

    {
      name: 'Job Haunt Project',
      description: "This is project is about track learning progress of the user and track the application status",
      features: [
        "Built using FastAPI, React ",
        "Built using React and Tailwind CSS"
      ],
      startDate: "October 2025",
      endDate: "November 2025",
      projectUrls:[
        {
          title: 'Frontend',
          githubUrl : "https://github.com/jobissjo/job-haunt-frontend.git",
          gitIconUrl: "fa-brands fa-github",
          demoIcon: "fa-solid fa-arrow-up-right-from-square",
          hostingUrl : "https://job-haunt-frontend-0a780.sevalla.page/",
        },
        {
          title: 'Backend',
          githubUrl : "https://github.com/jobissjo/job-haunt-fastapi-backend.git",
          gitIconUrl: "fa-brands fa-github",
          demoIcon: "fa-solid fa-arrow-up-right-from-square",
          hostingUrl : "https://job-haunt-fastapi-backend.onrender.com",
        }
      ]
    },

    
    // {
    //   name: 'Recommendation System',
    //   description: "Built a movie recommendation system using Python and Ploar",
    //   features: [
    //     "Built using FastAPI, Angular and Polor and NLP",
    //     "Built recommendation using content-based filtering"
    //   ],
    //   projectUrls:[
    //     {
    //       title: 'Frontend',
    //       githubUrl : "https://github.com/jobissjo/recommendation-frontend.git",
    //       gitIconUrl: "fa-brands fa-github",
    //       demoIcon: "fa-solid fa-arrow-up-right-from-square",
    //       hostingUrl : "",
    //     },{
    //       title: "Backend",
    //       githubUrl : "https://github.com/jobissjo/recommendation-backend-mongodb.git",
    //       gitIconUrl: "fa-brands fa-github",
    //       demoIcon: "fa-solid fa-arrow-up-right-from-square",
    //       hostingUrl : "",
    //     },
    //     {
    //       title: "Recommendation Model",
    //       githubUrl : "https://github.com/jobissjo/movie-recommendation-model.git",
    //       gitIconUrl: "fa-brands fa-github",
    //       demoIcon: "fa-solid fa-arrow-up-right-from-square",
    //       hostingUrl : "",
    //     }
    //   ],
    //   startDate: "Feb 2025",
    //   endDate: "Present",
    // },

    {
      name: "MERN Real Time Chat Project",
      projectUrls: [
        {
          title: "Quick Chat Server",
          githubUrl : "https://github.com/jobissjo/mern-real-time-chat",
          gitIconUrl: "fa-brands fa-github",
          demoIcon: "fa-solid fa-arrow-up-right-from-square",
          hostingUrl : "https://mern-real-time-chat-1.onrender.com",
        },
        {
          title: "Quick Chat Client",
          githubUrl : "https://github.com/jobissjo/mern-real-time-chat-client",
          gitIconUrl: "fa-brands fa-github",
          demoIcon: "fa-solid fa-arrow-up-right-from-square",
          hostingUrl : "https://mern-real-time-chat-client.vercel.app/",
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


private articles: Article[] = [
  {
    id: '1',
    title: 'Exploring Django’s New Rust-Powered API Framework — Django Bolt',
    excerpt: 'Django Bolt is a new API framework that is built on top of Django. It is a powerful tool that allows you to create robust, scalable web applications using the powerful combination of Django frontend and Node.js backend. This comprehensive guide covers architecture patterns, best practices, and real-world implementation strategies.',
    imageUrl: 'https://res.cloudinary.com/dyzaihuoa/image/upload/v1764009013/images/lqfhmxtdiu3rnvirmpku.png',
    url: 'https://jotechblog.netlify.app/blog/exploring-django-s-new-rust-powered-api-framework-django-bolt',
    publishedDate: new Date('2025-11-24'),
    category: ArticleCategory.WEB_DEVELOPMENT,
    tags: ['Django', 'rest', 'pythhon', 'fullstack', 'scalability', 'django rest framework', 'django bolt'],
    views: 2500,
    likes: 187,
    platform: 'Medium'
  },
  // {
  //   id: '3',
  //   title: 'Modern CSS: Grid, Flexbox, and Beyond',
  //   excerpt: 'Explore the latest CSS features and techniques for creating responsive, modern layouts. This article covers CSS Grid, Flexbox, custom properties, and emerging technologies like container queries.',
  //   imageUrl: 'assets/images/articles/modern-css.jpg',
  //   url: 'https://yourblog.com/modern-css-grid-flexbox-beyond',
  //   publishedDate: new Date('2024-03-10'),
  //   category: ArticleCategory.WEB_DEVELOPMENT,
  //   tags: ['css', 'grid', 'flexbox', 'responsive', 'frontend'],
  //   views: 1800,
  //   likes: 156,
  //   platform: 'Personal Blog'
  // },
  // {
  //   id: '5',
  //   title: 'Data Visualization with D3.js: Interactive Charts and Dashboards',
  //   excerpt: 'Master the art of data visualization using D3.js to create stunning, interactive charts and dashboards. This tutorial covers everything from basic charts to complex data-driven animations.',
  //   imageUrl: 'assets/images/articles/d3-visualization.jpg',
  //   url: 'https://dev.to/yourhandle/data-visualization-d3js-interactive-charts',
  //   publishedDate: new Date('2024-05-12'),
  //   category: ArticleCategory.DATA_SCIENCE,
  //   tags: ['d3js', 'javascript', 'dataviz', 'charts', 'dashboard'],
  //   views: 2900,
  //   likes: 198,
  //   platform: 'Dev.to'
  // },
  // {
  //   id: '6',
  //   title: 'Essential TypeScript Patterns for Enterprise Applications',
  //   excerpt: 'Learn advanced TypeScript patterns and techniques for building maintainable enterprise applications. Covers design patterns, type safety, generics, and architectural considerations.',
  //   imageUrl: 'assets/images/articles/typescript-patterns.jpg',
  //   url: 'https://yourblog.com/essential-typescript-patterns-enterprise',
  //   publishedDate: new Date('2024-06-18'),
  //   category: ArticleCategory.PROGRAMMING_TIPS,
  //   tags: ['typescript', 'patterns', 'enterprise', 'architecture', 'bestpractices'],
  //   views: 3500,
  //   likes: 267,
  //   platform: 'Personal Blog'
  // },
  
  
];

getArticles(category: string = 'all'): Article[] {
  if (category === 'all') {
    return this.articles.sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime());
  }
  return this.articles
    .filter(article => article.category === category)
    .sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime());
}
}
