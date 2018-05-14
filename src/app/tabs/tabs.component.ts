import { Component } from '@angular/core';

@Component({
  selector: 'tabs',
  template: `
    <button (click)="add()">Add tab</button>
    <button *ngIf="tabs.length" (click)="remove()">Remove tab</button>

    <br>

    <div class="tabs__titles">
      <tab *ngFor="let tab of tabs" [tab]="tab" [selectedTab]="selectedTab" (tabSelectedEvent)="select(tab)"></tab>
    </div>

    <tab-content *ngIf="selectedTab" [tab]="selectedTab"></tab-content>
  `,
  styles: [`p { font-family: Lato; }`]
})
export class TabsComponent {
  tabs = [1, 2];
  selectedTab = 1;

  add() {
    const tab = this.tabs.length + 1;
    this.tabs.push(tab);

    if (tab === 1) {
      this.select(tab)
    }
  }

  remove() {
    const tab = this.tabs.pop();

    if (this.tabs.length === 0) {
      this.selectedTab = undefined;
    } else if (tab === this.selectedTab) {
      this.select(this.tabs[0]);
    }
  }

  select(tab) {
    this.selectedTab = tab
  }
}
