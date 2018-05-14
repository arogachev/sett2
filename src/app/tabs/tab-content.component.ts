import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab-content',
  template: `
    Tab <b>{{tab}}</b> content
    <test [tab]="tab"></test>
  `
})
export class TabContentComponent {
  @Input() tab: number;
}
