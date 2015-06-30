import {TeamViewModel} from './models/team-view-model';
import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(HttpClient,Router)
export class EditTeam {

    constructor(http,router){
        this.team = new TeamViewModel();
        this.http = http;
        this.router = router;
    }

    save(){
        this.http.post('./team', this.team)
        .then(response => this.router.navigate('/'));
    }
}