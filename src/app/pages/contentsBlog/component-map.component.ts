import { AllKnowledgeComponent } from './all-knowledge/all-knowledge.component';
import { ScienceReligionComponent } from './science-religion/science-religion.component';
import { KhunTheoryComponent } from './khun-theory/khun-theory.component';
import { PopperTheoryComponent } from './popper-theory/popper-theory.component';
import { GitGithubComponent } from './git-github/git-github.component';
import { PpoJavaComponent } from './ppo-java/ppo-java.component';
import { RequisicaoHttpComponent } from './requisicao-http/requisicao-http.component';


export const ComponentMap: { [key: string]: any } = {
  "1": PpoJavaComponent,
  "2": RequisicaoHttpComponent,
  "3": ScienceReligionComponent,
  "4": AllKnowledgeComponent,
  "5": GitGithubComponent,
  "6": KhunTheoryComponent,
  "7": PopperTheoryComponent,

  // Adicione mais mapeamentos conforme necessário
};
