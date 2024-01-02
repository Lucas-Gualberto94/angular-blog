import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-knowledge',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-knowledge.component.html',
  styleUrl: './all-knowledge.component.css'
})
export class AllKnowledgeComponent implements OnInit {
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
