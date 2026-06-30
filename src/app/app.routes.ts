import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { SkillsPage } from './pages/skills-page/skills-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { authGuard } from './guards/auth-guard';
import { LoginComponent } from './admin/login/login.component';
import { Dashboard } from './admin/dashboard/dashboard';
import { ManageProjects } from './admin/manage-projects/manage-projects';
import { ManageSkillsComponent } from './admin/manage-skills/manage-skills.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },

    // Secure Admin Spaces
    { 
      path: 'admin/dashboard', 
      component: Dashboard, 
      canActivate: [authGuard]
    },
    {
      path: 'admin/projects',
      component: ManageProjects,
      canActivate: [authGuard]
    },
    {
      path: 'admin/skills',
      component: ManageSkillsComponent,
      canActivate: [authGuard]
    },

    // Public Facing Pages
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'about', component: AboutPage },
    { path: 'skills', component: SkillsPage },
    { path: 'projects', component: ProjectsPage },
    { path: 'contact', component: ContactPage },

    // Wildcard catch-all redirecting dead paths back home safely
    { path: '**', redirectTo: '/home' }
];
