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

  resolveOutlineColor(idx) {
    const colorCandidates = ['primary', 'secondary', 'danger', 'warning', 'info', 'success'];
    let resolvedIdx = idx;

    if (idx > 5) {
      resolvedIdx = Math.floor(Math.random() * 5);
    }

    return 'btn btn-lg btn-block btn-outline-' + colorCandidates[resolvedIdx];
  }
}
