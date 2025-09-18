import { Injectable } from '@angular/core';
import { Package, PackageCategory } from '../datatypes.types';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  private packages: Package[] = [
  // Python Packages
  {
    name: 'Django',
    imageUrl: 'assets/images/packages/django.png',
    description: 'High-level Python web framework for rapid development and clean, pragmatic design.',
    type: 'Python',
    version: '4.2',
    category: PackageCategory.PYTHON
  },
  {
    name: 'FastAPI',
    imageUrl: 'assets/images/packages/fastapi.png',
    description: 'Modern, fast web framework for building APIs with Python 3.7+ based on standard Python type hints.',
    type: 'Python',
    version: '0.104',
    category: PackageCategory.PYTHON
  },
  {
    name: 'Pandas',
    imageUrl: 'assets/images/packages/pandas.png',
    description: 'Powerful data structures and data analysis tools for Python programming language.',
    type: 'Python',
    version: '2.1',
    category: PackageCategory.DATA_SCIENCE
  },
  {
    name: 'NumPy',
    imageUrl: 'assets/images/packages/numpy.png',
    description: 'Fundamental package for scientific computing with Python, providing N-dimensional array objects.',
    type: 'Python',
    version: '1.25',
    category: PackageCategory.DATA_SCIENCE
  },
  {
    name: 'TensorFlow',
    imageUrl: 'assets/images/packages/tensorflow.png',
    description: 'Open-source machine learning framework for building and deploying ML models.',
    type: 'Python',
    version: '2.13',
    category: PackageCategory.MACHINE_LEARNING
  },
  
  // NPM Packages
  {
    name: 'React',
    imageUrl: 'assets/images/packages/react.png',
    description: 'JavaScript library for building user interfaces with component-based architecture.',
    type: 'NPM',
    version: '18.2',
    category: PackageCategory.FRONTEND
  },
  {
    name: 'Angular',
    imageUrl: 'assets/images/packages/angular.png',
    description: 'Platform and framework for building single-page client applications using HTML and TypeScript.',
    type: 'NPM',
    version: '17.0',
    category: PackageCategory.FRONTEND
  },
  {
    name: 'Express.js',
    imageUrl: 'assets/images/packages/express.png',
    description: 'Fast, unopinionated, minimalist web framework for Node.js applications.',
    type: 'NPM',
    version: '4.18',
    category: PackageCategory.BACKEND
  },
  {
    name: 'Lodash',
    imageUrl: 'assets/images/packages/lodash.png',
    description: 'Modern JavaScript utility library delivering modularity, performance & extras.',
    type: 'NPM',
    version: '4.17',
    category: PackageCategory.UTILITIES
  },
  {
    name: 'Jest',
    imageUrl: 'assets/images/packages/jest.png',
    description: 'Delightful JavaScript testing framework with a focus on simplicity and developer experience.',
    type: 'NPM',
    version: '29.7',
    category: PackageCategory.TESTING
  }
];

getPackages(category: string = 'all'): Package[] {
  if (category === 'all') {
    return this.packages;
  }
  return this.packages.filter(package_item => package_item.category === category);
}
}
