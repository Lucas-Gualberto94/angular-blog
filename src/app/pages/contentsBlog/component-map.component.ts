import { AllKnowledgeComponent } from './all-knowledge/all-knowledge.component';
import { ScienceReligionComponent } from './science-religion/science-religion.component';
import { KhunTheoryComponent } from './khun-theory/khun-theory.component';
import { PopperTheoryComponent } from './popper-theory/popper-theory.component';
import { GitGithubComponent } from './git-github/git-github.component';
import { PpoJavaComponent } from './ppo-java/ppo-java.component';
import { RequisicaoHttpComponent } from './requisicao-http/requisicao-http.component';
import { CRUDJSComponent } from './crud-js/crud-js.component';


export const ComponentMap: { [key: string]: any } = {
  "1": CRUDJSComponent,
  "2": PpoJavaComponent,
  "3": RequisicaoHttpComponent,
  "4": ScienceReligionComponent,
  "5": AllKnowledgeComponent,
  "6": GitGithubComponent,
  "7": KhunTheoryComponent,
  "8": PopperTheoryComponent,

};
