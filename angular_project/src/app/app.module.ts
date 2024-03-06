import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MemberDetailModule } from './member-detail/member-detail.module';
import { MemberFormModule } from './member-form/member-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HomeModule,
    MemberDetailModule,
    MemberFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
