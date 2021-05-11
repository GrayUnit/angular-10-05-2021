import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from './ui/ui.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { OrderModule } from './order/order.module';
import { ClientModule } from './client/client.module';
import { SharedModule } from './shared/shared.module';
import { TemplatesModule } from './templates/templates.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UiModule,
    LoginModule,
    CoreModule,
    OrderModule,
    ClientModule,
    SharedModule,
    TemplatesModule,
    PageNotFoundModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
