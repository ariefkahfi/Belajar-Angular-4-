import {Component, Input, EventEmitter, Output , OnChanges, SimpleChanges} from "@angular/core";
import {CobaService} from "../service/coba.service";

@Component({
    selector : 'child',
    template : `
        <span>{{_serviceName}}</span> 
        <span *ngIf = "validService" >{{caption}}</span>
    `
})
export class ChildComponent implements OnChanges{
    
    ngOnChanges(changes: SimpleChanges): void {
        for (let propName in changes){
            let chg = changes[propName];
            console.log(
                `${propName} = ${chg.currentValue} - ${chg.previousValue}`
            )
        }
    }


    get validService(){
        return this.cobaService.valid;
    }

    @Input()
    caption = "";
    @Input()
    _serviceName = "";



    

    constructor(private cobaService : CobaService){

    }
}
