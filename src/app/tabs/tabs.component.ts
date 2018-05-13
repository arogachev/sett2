import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: [ './tabs.component.css' ]
})
export class TabsComponent  {
  public tabs = [ 1, 2 ];

  public dec() {
    this.tabs = this.tabs.slice(0, -1);
  }

  public inc() {
    this.tabs = [ ...this.tabs, (this.tabs.length + 1) ];
  }
}
