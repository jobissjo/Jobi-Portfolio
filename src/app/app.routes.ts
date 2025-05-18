import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';


export const routes: Routes = [
    {path : '', component: HomeComponent},
    {path: 'in-progress', component: InProgressComponent}
];
