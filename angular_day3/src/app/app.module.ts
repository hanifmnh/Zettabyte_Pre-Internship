import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightConeModule } from './light-cone/light-cone.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LightConeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
