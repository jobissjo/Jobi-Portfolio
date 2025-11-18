import { Injectable } from '@angular/core';
import { Package, PackageCategory } from '../datatypes.types';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  private packages: Package[] = [
  // Python Packages
  // {
  //   name: 'Django',
  //   imageUrl: 'assets/images/packages/django.png',
  //   description: 'High-level Python web framework for rapid development and clean, pragmatic design.',
  //   type: 'Python',
  //   version: '4.2',
  //   category: PackageCategory.PYTHON
  // },
  // {
  //   name: 'FastAPI',
  //   imageUrl: 'assets/images/packages/fastapi.png',
  //   description: 'Modern, fast web framework for building APIs with Python 3.7+ based on standard Python type hints.',
  //   type: 'Python',
  //   version: '0.104',
  //   category: PackageCategory.PYTHON
  // },
  
  
  // // NPM Packages


  // {
  //   name: 'Express.js',
  //   imageUrl: 'assets/images/packages/express.png',
  //   description: 'Fast, unopinionated, minimalist web framework for Node.js applications.',
  //   type: 'NPM',
  //   version: '4.18',
  //   category: PackageCategory.BACKEND
  // },
  // {
  //   name: 'Lodash',
  //   imageUrl: 'assets/images/packages/lodash.png',
  //   description: 'Modern JavaScript utility library delivering modularity, performance & extras.',
  //   type: 'NPM',
  //   version: '4.17',
  //   category: PackageCategory.UTILITIES
  // },
  {
    name: 'Pytest-dotenv-modern',
    imageUrl: 'assets/images/packages/jest.png',
    description: 'A modern pytest plugin that loads environment variables from dotenv files before running tests.',
    type: 'Python',
    version: '0.2',
    category: PackageCategory.TESTING,
    categories : [PackageCategory.PYTHON, PackageCategory.TESTING]
    
  }
];

getPackages(category: string | PackageCategory = 'all'): Package[] {
  if (category === 'all') {
    return this.packages;
  }
  return this.packages.filter(package_item => package_item.categories.includes(category) );
}
}
