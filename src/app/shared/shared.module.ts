import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TotalPipe } from './pipes/total.pipe';
import { CommentPipe } from './pipes/comment.pipe';
import { StateDirective } from './directives/state.directive';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TableLightComponent,
    TableDarkComponent,
    TotalPipe,
    CommentPipe,
    StateDirective,
    BtnComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule
  ],
  exports: [
    TemplatesModule,
    TableLightComponent,
    TableDarkComponent,
    TotalPipe,
    CommentPipe,
    StateDirective,
    BtnComponent
  ]
})
export class SharedModule { }
