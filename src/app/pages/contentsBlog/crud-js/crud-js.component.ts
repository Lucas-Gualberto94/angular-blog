import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-crud-js',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './crud-js.component.html',
  styleUrl: './crud-js.component.css'
})
export class CRUDJSComponent implements OnInit {

  resolvedComponent: any;
  constructor(
    private route:ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.resolvedComponent = data['component'];
    })
  }
}
