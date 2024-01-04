import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-popper-theory',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './popper-theory.component.html',
  styleUrl: './popper-theory.component.css'
})
export class PopperTheoryComponent implements OnInit {
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
