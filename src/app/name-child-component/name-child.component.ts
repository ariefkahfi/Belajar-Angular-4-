import {Component,Input} from "@angular/core";


@Component({
    selector : 'name-child',
    template : `
       <p>My name is {{name}}</p>    
    `
})
export class NameChildComponent{
    private _name : string;

    @Input()
    set name(name : string){
        this._name=name;
    }
    get name(){
        return this._name;
    }
}