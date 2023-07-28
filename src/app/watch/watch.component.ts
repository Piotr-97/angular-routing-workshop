import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  constructor(private readonly route: ActivatedRoute) {}

  id: number | null = null;

  async ngOnInit() {
    const paramSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

}
