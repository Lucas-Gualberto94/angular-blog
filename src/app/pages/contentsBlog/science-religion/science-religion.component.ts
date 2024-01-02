import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-science-religion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './science-religion.component.html',
  styleUrl: './science-religion.component.css'
})
export class ScienceReligionComponent implements OnInit {
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

