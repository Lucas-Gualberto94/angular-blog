import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScienceReligionComponent } from './pages/contentsBlog/science-religion/science-religion.component';
import { AllKnowledgeComponent } from './pages/contentsBlog/all-knowledge/all-knowledge.component';
import { DecideComponent } from './pages/contentsBlog/decide.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '1',
    component: ScienceReligionComponent,
    resolve: { Component: DecideComponent},
  },
  {
    path: '2',
    component: AllKnowledgeComponent,
    resolve: { Component: DecideComponent},
  },
];
