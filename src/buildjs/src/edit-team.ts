import {TeamViewModel} from './models/team-view-model';
import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(HttpClient,Router)
export class EditTeam {
    team: TeamViewModel;
    http: HttpClient;
    router: Router;

    constructor(http: HttpClient, router: Router){
        this.team = new TeamViewModel(null);
        this.http = http;
        this.router = router;
    }

    save(){
        this.http.post('./team', this.team)
        .then(response => this.router.navigate('/'));
    }
}