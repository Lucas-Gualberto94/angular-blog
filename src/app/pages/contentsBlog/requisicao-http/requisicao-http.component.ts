import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-requisicao-http',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './requisicao-http.component.html',
  styleUrl: './requisicao-http.component.css'
})
export class RequisicaoHttpComponent implements OnInit {
  resolvedComponent: any

  constructor (
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.resolvedComponent = data['component'];
    });
  }
}
