import { Component, HostListener, OnInit } from '@angular/core';
import { InheritDefinitionFeature } from '../../node_modules/@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  version = 6;
  containerClass = 'container-fluid';
  isViewportExpanded = false;

  buttons = [
    {
      name: 'Work Pro Tip',
      placement: 'bottom',
      tooltip: 'Have the wisdom of a 50 year old, the experience of a 40 year old, and the focus of a 30 year old!'
    },
    {
      name: 'Life Pro Tip',
      tooltip: 'Moderation, friends, and lots of patience!'
    },
    {
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
    const buttonContainer = document.body.getElementsByClassName('button-container')[0];

    if (buttonContainer) {
      const elmOffsets = buttonContainer.getBoundingClientRect();

      if (elmOffsets.top < 175) {
        this.buttons.forEach(button => button.placement = 'bottom');
      } else {
        this.buttons.forEach(button => button.placement = 'top');
      }
    }
  }

  toggleViewportExpansion() {
    this.containerClass = this.containerClass.indexOf('xxl-height') !== -1 ?
      'container-fluid' : 'container-fluid xxl-height';
    this.isViewportExpanded = this.containerClass.indexOf('xxl-height') !== -1;
  }
}
