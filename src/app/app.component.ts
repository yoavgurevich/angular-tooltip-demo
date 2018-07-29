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
      id: this.generateId(),
      name: 'Work Pro Tip',
      placement: 'bottom',
      tooltip: 'Have the wisdom of a 50 year old, the experience of a 40 year old, and the focus of a 30 year old!'
    },
    {
      id: this.generateId(),
      name: 'Life Pro Tip',
      tooltip: 'Moderation, friends, and lots of patience!'
    },
    {
      id: this.generateId(),
      name: 'Love Pro Tip',
      tooltip: 'Courage, diplomacy, and lots of gifts!'
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

  @HostListener('window:scroll', ['$event'])
  handleScroll(event) {
    const buttonElms = Array.from(document.body.getElementsByTagName('button'));

    if (buttonElms.length) {
      buttonElms.forEach(element => {
        const elmOffsets = element.getBoundingClientRect();

        if (elmOffsets.top < 150) {
          const foundBtn = this.buttons.find(button => button.id === element.id);

          if (foundBtn && foundBtn.placement === 'top') {
            foundBtn.placement = 'bottom';
          }
        } else {
          const foundBtn = this.buttons.find(button => button.id === element.id);

          if (foundBtn && foundBtn.placement === 'bottom') {
            foundBtn.placement = 'top';
          }
        }
      });
    }
  }

  generateId() {
    const arr = new Uint8Array(8);
    window.crypto.getRandomValues(arr);
    return arr.join('');
  }
}
