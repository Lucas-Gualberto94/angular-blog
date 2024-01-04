import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-khun-theory',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './khun-theory.component.html',
  styleUrl: './khun-theory.component.css'
})
export class KhunTheoryComponent implements OnInit {
  resolvedComponent: any;

  constructor(
    private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.route.data.subscribe((data) => {
        this.resolvedComponent = data['component'];
      });
    }
}
