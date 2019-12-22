import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  @Input() title: string;
  @Input() summary: string;
  @Input() description: string;
  @Input() benefits: string[];
  @Input() optional: boolean;

  constructor() {}

  ngOnInit() {}
}
