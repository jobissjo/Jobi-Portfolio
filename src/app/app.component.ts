import { Component, OnInit } from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { inject } from "@vercel/analytics"
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'jobi-portfolio';
  ngOnInit(): void {
    inject(); 
  }
}
