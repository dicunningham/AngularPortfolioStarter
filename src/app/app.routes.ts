import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { SkillsPage } from './pages/skills-page/skills-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ContactPage } from './pages/contact-page/contact-page';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'about', component: AboutPage },
    { path: 'skills', component: SkillsPage },
    { path: 'projects', component: ProjectsPage },
    { path: 'contact', component: ContactPage },
    { path: '**', redirectTo: '/home' }
];
