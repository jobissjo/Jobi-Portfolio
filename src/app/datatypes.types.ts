export enum SkillCategory {
    Programming = 'programming',
    TechStack = 'tech stack',
    Database = 'database',
    Framework = 'framework',
    Tool = 'tool'
}



export interface Skill{
    name:string,
    imageUrl:string,
    level:number,
    category:SkillCategory
}

export interface Experience{
    position:string,
    companyName: string,
    startedDate: Date,
    endedDate:Date,
    workAchievements: string[]
}

export interface Contact{
    name: string,
    iconStyle:string,
    link: string,
    title:string
}

export interface Resume{
    name:string,
    file:string
}

interface ProjectUrl{
    title: string,
    githubUrl: string,
    hostingUrl: string,
    gitIconUrl:string,
    demoIcon:string,
}

export interface Project {
    name: string,
    description: string,
    features: string[],
    startDate: string,
    endDate: string,
    projectUrls:ProjectUrl[]

}