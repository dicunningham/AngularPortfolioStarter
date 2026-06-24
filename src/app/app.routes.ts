import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { SkillsPage } from './pages/skills-page/skills-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { authGuard } from './guards/auth-guard';
import { Login } from './admin/login/login';
import { Dashboard } from './admin/dashboard/dashboard';


export const routes: Routes = [
    { path: 'admin/login', component: Login },
    { 
    path: 'admin/dashboard', 
    component: Dashboard, 
    canActivate: [authGuard]
  },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'about', component: AboutPage },
    { path: 'skills', component: SkillsPage },
    { path: 'projects', component: ProjectsPage },
    { path: 'contact', component: ContactPage },
    { path: '**', redirectTo: '/home' }
];
