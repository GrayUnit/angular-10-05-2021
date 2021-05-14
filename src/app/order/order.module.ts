import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';
import { TemplatesModule } from '../templates/templates.module';
import { SharedModule } from '../shared/shared.module';
import { TextModule } from '../text/text.module';
import { FormAddOrderComponent } from './components/form-add-order/form-add-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';


@NgModule({
  declarations: [
    PageListOrderComponent,
    FormAddOrderComponent,
    PageAddOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    TextModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
