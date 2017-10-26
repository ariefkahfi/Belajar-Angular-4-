import { Component , ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {Person} from "./model/Person";
import {CobaService} from "./service/coba.service";

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  providers : [CobaService]
})
export class AppComponent {
  

  

  inputValue= "";
  _submitService = "";


  submitCaption = "";


  services = ["Service one","Service two"];

  constructor(private cobaService : CobaService){
    
  }

    clickService(){
      this.submitCaption = "Submitted service";
      this.cobaService.valid = true;
    }
}
