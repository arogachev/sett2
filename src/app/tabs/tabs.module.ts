import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TabsComponent } from './tabs.component';
import { HelloComponent } from '../hello.component';
import { TestComponent } from '../test.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ TabsComponent, HelloComponent, TestComponent ],
  bootstrap:    [ TabsComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class TabsModule { }
