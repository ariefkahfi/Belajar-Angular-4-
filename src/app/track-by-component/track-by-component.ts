import {Component , Input , OnInit} from "@angular/core";
import {Person} from "../model/Person";

@Component({
    selector : 'track-by',
    template : `
        <h3>Ini TrackBy</h3>
        <button (click) = "resetId()">Refresh ID</button>
        <ul>
            <li *ngFor="let arr of arrNames; trackBy : trackByItems">
                {{arr.id}} | {{arr.name}}
            </li>
            <p>counter = {{counter}}</p>
        </ul>
    `
})
export class TrackByComponent implements OnInit{
    
    
    resetId(){
        this.arrNames = [
            new Person(1,'Arief'),
            new Person(3,'Hello'),
            new Person(5,'World')
        ];
    }    
    @Input()
    arrNames : Person [];
    counter = 0 ;

    ngOnInit(): void {
        console.log(this.arrNames);
    }
    
    trackByItems(idx : number , item : Person){
        console.log('Track By IdPerson  , index :  ' +idx + ' new Person ID : ' + item.id);
        this.counter ++;
        return item.id;
    }
}