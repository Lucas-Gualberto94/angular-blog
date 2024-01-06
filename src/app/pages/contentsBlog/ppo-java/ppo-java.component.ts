import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ppo-java',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ppo-java.component.html',
  styleUrl: './ppo-java.component.css'
})

export class PpoJavaComponent implements OnInit {
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

