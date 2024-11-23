import { Component, OnInit } from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { inject } from "@vercel/analytics"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'jobi-portfolio';
  ngOnInit(): void {
    inject(); 
  }
}
