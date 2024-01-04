import { AllKnowledgeComponent } from './all-knowledge/all-knowledge.component';
import { ScienceReligionComponent } from './science-religion/science-religion.component';
import { KhunTheoryComponent } from './khun-theory/khun-theory.component';
import { PopperTheoryComponent } from './popper-theory/popper-theory.component';


export const ComponentMap: { [key: string]: any } = {
  "1": ScienceReligionComponent,
  "2": AllKnowledgeComponent,
  "3": KhunTheoryComponent,
  "4": PopperTheoryComponent,
  // Adicione mais mapeamentos conforme necessário
};
