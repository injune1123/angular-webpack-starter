import {Component} from "angular2/core";
import {CardComponent} from "../../components/card/card";
import {ContInfoComponent} from "../../components/contInfo/contInfo";
import {ResumeBoardComponent} from "../../components/resumeBoard/resumeBoard";

@Component({
    selector: 'app-shell',
    template: require('./app-shell.html'),
    directives: [CardComponent, ContInfoComponent, ResumeBoardComponent]
})
export class AppShell {

}