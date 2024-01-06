import { AllKnowledgeComponent } from './all-knowledge/all-knowledge.component';
import { ScienceReligionComponent } from './science-religion/science-religion.component';
import { KhunTheoryComponent } from './khun-theory/khun-theory.component';
import { PopperTheoryComponent } from './popper-theory/popper-theory.component';
import { GitGithubComponent } from './git-github/git-github.component';
import { PpoJavaComponent } from './ppo-java/ppo-java.component';


export const ComponentMap: { [key: string]: any } = {
  "1": GitGithubComponent,
  "2": PpoJavaComponent,
  "3": ScienceReligionComponent,
  "4": AllKnowledgeComponent,
  "5": KhunTheoryComponent,
  "6": PopperTheoryComponent,

  // Adicione mais mapeamentos conforme necessário
};
