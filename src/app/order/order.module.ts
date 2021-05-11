import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';
import { TemplatesModule } from '../templates/templates.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ]
})
export class OrderModule { }
