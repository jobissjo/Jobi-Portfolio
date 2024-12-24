import { CommonModule } from '@angular/common';
import { Component, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  
  text:string= 'Python Developer';
  displayedText = '';
  typingSpeed = 150;

  ngOnInit() {
    this.typeJobTitle();
  }

  typeJobTitle(){
    let currentIndex = 0;
    const interval = setInterval(()=> {

      if (currentIndex < this.text.length){
        if (this.text[currentIndex] == ' '){
          this.displayedText += '<br />'
        }else{
          this.displayedText += this.text[currentIndex];
        }
        
        currentIndex++;
      }else{
        clearInterval(interval);
        
      }
    }, this.typingSpeed)
  }
}
