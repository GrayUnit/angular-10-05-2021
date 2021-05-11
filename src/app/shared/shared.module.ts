import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';


@NgModule({
  declarations: [
    TableLightComponent,
    TableDarkComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule
  ],
  exports: [
    TemplatesModule,
    TableLightComponent
  ]
})
export class SharedModule { }
