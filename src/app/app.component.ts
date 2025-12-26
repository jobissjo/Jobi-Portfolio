import { Component, OnInit } from '@angular/core';
import { inject } from "@vercel/analytics"
import { RouterModule } from '@angular/router';
import { CursorComponent } from './components/cursor/cursor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CursorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'jobi-portfolio';
  ngOnInit(): void {
    inject();
  }
}
