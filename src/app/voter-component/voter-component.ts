import {
      Component 
    , EventEmitter 
    , Output
    , Input} from "@angular/core";



@Component({
    selector : 'voter',
    templateUrl : './voter-component.html'
})
export class VoterComponent {
    
   

    @Output()
    eventEmitter = new EventEmitter<string>();

    submitVote(name : string){
        this.eventEmitter.emit(name);
    }
}