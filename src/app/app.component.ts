import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  version = 6;
  buttons = [
    {
      name: 'Work Pro Tip',
      placement: 'bottom',
      tooltip: 'Have the wisdom of a 50 year old, the experience of a 40 year old, the focus of a 30 year old!'
    },
    {
      name: 'Life Pro Tip',
      placement: 'top',
      tooltip: 'Moderation, friends, and lots of patience!'
    }
  ];

  ngOnInit() {
    this.version = document.body.firstElementChild.attributes['ng-version'].value;
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape' && document.activeElement) {
      // Get typescript to stop sqwaking
      const activeElm = (document.activeElement as any);
      activeElm.blur();
    }
  }
}
