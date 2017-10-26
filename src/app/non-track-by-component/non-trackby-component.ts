import {Component , Input , OnInit} from "@angular/core";
import {Person} from "../model/Person";


@Component({
    selector : 'non-track',
    template : `
        <h3>Non TrackBy Component</h3>
        <button (click) = "resetId()">Refresh ID</button>
        <ul>
            <li *ngFor = "let arr of arrPersons">
                {{arr.id}} | {{arr.name}}
            </li>
            <p>counter = {{counter}}</p>
        </ul>
    `
})
export class NonTrackByComponent{
    
    @Input()
    arrPersons : Person [];
    counter = 0;
    
    resetId(){
        this.arrPersons = [
            new Person(1,'Arief'),
            new Person(3,'Hello'),
            new Person(5,'world')
        ];
        this.counter ++;
    }
}