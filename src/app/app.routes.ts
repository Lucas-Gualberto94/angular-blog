import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DecideComponent } from './pages/contentsBlog/decide.component';

import { ScienceReligionComponent } from './pages/contentsBlog/science-religion/science-religion.component';
import { AllKnowledgeComponent } from './pages/contentsBlog/all-knowledge/all-knowledge.component';
import { KhunTheoryComponent } from './pages/contentsBlog/khun-theory/khun-theory.component';
import { PopperTheoryComponent } from './pages/contentsBlog/popper-theory/popper-theory.component';

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
  {
  path: '3',
    component: KhunTheoryComponent,
    resolve: { Component: DecideComponent},
  },
  {
    path: '4',
      component: PopperTheoryComponent,
      resolve: { Component: DecideComponent},
    },
];
