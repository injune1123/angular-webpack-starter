import {Component} from "angular2/core";
import {CardComponent} from "../../components/card/card";
import {ContInfoComponent} from "../../components/contInfo/contInfo";

@Component({
    selector: 'app-shell',
    template: require('./app-shell.html'),
    directives: [CardComponent, ContInfoComponent]
})
export class AppShell {

}