import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {TeamViewModel} from './models/team-view-model';

@inject(HttpClient)
export class Team {

    httpClient: HttpClient;
    team: TeamViewModel;
    
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.team = new TeamViewModel({"ForegroundColour": 1, "BackgroundColour": 1})       
  }
  
  activate(params: any) {
    var teamId = params.id;
    
    return this.httpClient.get('./team/'+teamId)
      .then(response => {
        this.team = new TeamViewModel(response.content);
      });
    
  }
}
