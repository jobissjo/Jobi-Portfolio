import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Package, PackageCategory } from '../../datatypes.types';
import { HelperService } from '../../service/helper.service';
import { SkillService } from '../../service/skill.service';

interface PythonLibrary {
  id: number;
  name: string;
  description: string;
  version: string;
  pypiUrl: string;
  githubUrl?: string;
  downloads: string;
  tags: string[];
  status: 'active' | 'maintenance' | 'deprecated';
  lastUpdated: Date;
}

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent {
  @Input() darkMode: boolean = false;
  packages: Package[] = [];
  private readonly skillService: SkillService = inject(SkillService);
  selectedPackageCategory = 'all'
  packageCategories: string[] = ['all', ...Object.values(PackageCategory)];

  isActive = false;
  hasLoaded = false;

  onMouseEnter() {
    if (!this.hasLoaded) {
      this.isActive = true;
      this.hasLoaded = true;
    }
  }

  ngOnInit(): void {
    this.getPackages()
  }

  getPackages(category: string | PackageCategory = 'all') {
    this.packages = this.skillService.getPackages(category)
  }

  trackById(index: number, package_item: any): any {
    return package_item.name;
  }

  changeCategory(category: string) {
    this.selectedPackageCategory = category;
    this.getPackages(this.selectedPackageCategory);
  }

}
