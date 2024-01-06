import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-git-github',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './git-github.component.html',
  styleUrl: './git-github.component.css'
})
export class GitGithubComponent implements OnInit {
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
