import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() summary: string;
  @Input() description: string;
  @Input() benefits: string[];
  @Input() optional: boolean;

  constructor() {}

  ngOnInit() {}
}
