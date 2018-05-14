import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <tab-title class="tabs__title" [class.tabs__title--active]="selectedTab === tab" (click)="select(tab)"
               [tab]="tab"></tab-title>
  `
})
export class TabComponent {
  @Input() tab: number;
  @Input() selectedTab: number;
  @Output() tabSelectedEvent = new EventEmitter<string>();

  select(tab) {
    this.tabSelectedEvent.emit(tab);
  }
}
