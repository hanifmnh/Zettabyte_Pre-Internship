import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiquidListModule } from './liquid-list/liquid-list.module';
import { LiquidDetailModule } from './liquid-detail/liquid-detail.module';
import { LiquidCartModule } from './liquid-cart/liquid-cart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    LiquidListModule,
    LiquidDetailModule,
    LiquidCartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
