import { Component, output } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  darkMode:boolean = false;

 modeChange = output<boolean>();

  toggleDarkMode(){
    this.darkMode = !this.darkMode
    this.modeChange.emit(this.darkMode);
  }
 
}
