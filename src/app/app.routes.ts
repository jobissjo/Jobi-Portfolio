import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


export const routes: Routes = [
    {path : '', component: HomeComponent},
    {path: 'in-progress', component: InProgressComponent},
    {path: "**", component: PageNotFoundComponent},
];
