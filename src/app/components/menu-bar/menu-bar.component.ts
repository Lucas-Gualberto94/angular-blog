import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<string | null>();
  dataFake = dataFake;

ngOnInit(): void {

}

filterByCategory(category: string | null): void {
  this.categorySelected.emit(category); // emite o valor da categoria selecionada através do EventEmitter. Isso significa que o componente pai (home) será notificado sobre a categoria selecionada.
}

}
