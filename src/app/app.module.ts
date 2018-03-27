import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { KegListComponent } from './keg-list/keg-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NewKegComponent,
    KegListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
