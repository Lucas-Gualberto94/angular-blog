import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { CardComponent } from '../../components/card/card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { dataFake } from '../../data/dataFake';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, CardComponent, MenuBarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dataFake = dataFake;
  filteredData = dataFake;

  filterByCategory(category:string | null): void {
    this.filteredData = category
    ? this.dataFake.filter(item => item.category === category)
    :this.dataFake
    //A expressão ternária '? :' é usada para determinar se uma categoria foi selecionada.
    //Se category não for nulo, a propriedade filteredData é atualizada com os itens filtrados
    //que têm a categoria correspondente. Se category for nulo, todos os dados são exibidos.
  }

}
