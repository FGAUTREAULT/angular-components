import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './layout/main/main.component';
import { LayoutModule } from './layout/layout.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministrationModule } from './administration/administration.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HomeModule,
    AdministrationModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
