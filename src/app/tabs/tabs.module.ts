import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { TabTitleComponent } from './tab-title.component';
import { TabContentComponent } from './tab-content.component';
import { TestComponent } from '../test.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ TabsComponent, TabComponent, TabTitleComponent, TabContentComponent, TestComponent ],
  exports: [ TabsComponent ]
})
export class TabsModule { }
