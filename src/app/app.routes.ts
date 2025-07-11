import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Footer } from './footer/footer';
import { Resume } from './resume/resume';

export const routes: Routes = [
    
    {path:'**', component:Home},
    {path:'contact',  component: Contact},
    {path:'about',  component: About},
    {path:'projects',  component: Projects},
    {path:'footer', component: Footer},
    {path:'resume',  component: Resume},

];
