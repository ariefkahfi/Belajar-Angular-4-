import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {VoterComponent} from "./voter-component/voter-component";
import {NameChildComponent} from "./name-child-component/name-child.component";
import {TrackByComponent} from "./track-by-component/track-by-component";
import {NonTrackByComponent} from "./non-track-by-component/non-trackby-component";
import {ChildComponent} from "./child-component/child.component";

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    NameChildComponent,
    TrackByComponent,
    NonTrackByComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
