import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { FormsModule } from '@angular/forms';
import { SellPintComponent } from './sell-pint/sell-pint.component';


@NgModule({
  declarations: [
    AppComponent,
    NewKegComponent,
    KegListComponent,
    EditKegComponent,
    SellPintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
