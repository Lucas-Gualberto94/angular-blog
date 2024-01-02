import { Component } from '@angular/core';
import { AllKnowledgeComponent } from './all-knowledge/all-knowledge.component';
import { ScienceReligionComponent } from './science-religion/science-religion.component';


export const ComponentMap: { [key: string]: any } = {
  "1": ScienceReligionComponent,
  "2": AllKnowledgeComponent,
  // Adicione mais mapeamentos conforme necessário
};
