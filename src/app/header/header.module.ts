import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeadercontentComponent } from './headercontent/headercontent.component';


@NgModule({
  declarations: [
    HeadercontentComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }
