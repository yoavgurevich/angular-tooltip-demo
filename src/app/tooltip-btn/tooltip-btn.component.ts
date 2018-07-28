import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip-btn',
  templateUrl: './tooltip-btn.component.html',
  styleUrls: ['./tooltip-btn.component.scss']
})

export class TooltipBtnComponent implements OnInit {
  @Input() buttonData;

  constructor() {
  }

  ngOnInit() { }
}
