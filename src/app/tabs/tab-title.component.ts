import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab-title',
  template: `Tab <b>{{tab}}</b> title`
})
export class TabTitleComponent {
  @Input() tab: number;
}
