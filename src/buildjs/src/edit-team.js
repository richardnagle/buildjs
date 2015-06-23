import {TeamViewModel} from './models/team-view-model';
import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(HttpClient,Router)
export class EditTeam {

    constructor(http,router){
        this.Team = new TeamViewModel();
        this.http = http;
        this.router = router;
    }

    save(){
        this.http.post('./team', this.Team)
        .then(response => this.router.navigate('/'));
    }
}