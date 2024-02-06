import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DecideComponent } from './pages/contentsBlog/decide-componente.service';

import { ScienceReligionComponent } from './pages/contentsBlog/science-religion/science-religion.component';
import { AllKnowledgeComponent } from './pages/contentsBlog/all-knowledge/all-knowledge.component';
import { KhunTheoryComponent } from './pages/contentsBlog/khun-theory/khun-theory.component';
import { PopperTheoryComponent } from './pages/contentsBlog/popper-theory/popper-theory.component';
import { GitGithubComponent } from './pages/contentsBlog/git-github/git-github.component';
import { PpoJavaComponent } from './pages/contentsBlog/ppo-java/ppo-java.component';
import { RequisicaoHttpComponent } from './pages/contentsBlog/requisicao-http/requisicao-http.component';
import { CRUDJSComponent } from './pages/contentsBlog/crud-js/crud-js.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '1',
      component:  CRUDJSComponent,
      resolve: { Component: DecideComponent},
  },
  {
    path: '2',
      component: PpoJavaComponent,
      resolve: { Component: DecideComponent},
  },
  {
    path: '3',
      component: RequisicaoHttpComponent,
      resolve: { Component: DecideComponent},
  },
  {
    path: '4',
    component: ScienceReligionComponent,
    resolve: { Component: DecideComponent},
  },
  {
    path: '5',
    component: AllKnowledgeComponent,
    resolve: { Component: DecideComponent},
  },
  {
    path: '6',
      component: GitGithubComponent,
      resolve: { Component: DecideComponent},
  },
  {
  path: '7',
    component: KhunTheoryComponent,
    resolve: { Component: DecideComponent},
  },
  {
    path: '8',
      component: PopperTheoryComponent,
      resolve: { Component: DecideComponent},
  },
];
