import { Injectable } from "@angular/core";




@Injectable()
export class CobaService {
    
    private _name : string;
    private _text : string;
    private _valid  : boolean ;


    set valid(valid : boolean){
        this._valid=valid;
    }
    get valid(){
        return this._valid;
    }
    
    set text(text : string){
        this._text = text;
    }
    get text(){
        return this._text;
    }
    
    set name(name : string){
        this._name = name;
    }
    get name(){
        return this._name;
    }


    helloService(){
        console.log('Halo from service');
    }
    sayHello(name : string){
        console.log('Your Name : ' + name);
    }
}