import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListModule } from './students-list/students-list.module';
import { StudentsFormModule } from './students-form/students-form.module';
import { StudentsDetailModule } from './students-detail/students-detail.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    StudentsListModule,
    StudentsFormModule,
    StudentsDetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
