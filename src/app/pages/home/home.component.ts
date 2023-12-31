import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { CardComponent } from '../../components/card/card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, CardComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  }
