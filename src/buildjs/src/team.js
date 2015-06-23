import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {TeamViewModel} from './models/team-view-model';

@inject(HttpClient)
export class Team {

    httpClient: HttpClient;
    team;
    
  constructor(httpClient) {
    this.httpClient = httpClient;
    
  }
  
  activate(params) {
    var teamId = params.id;
    
    return this.httpClient.get('./team/'+teamId)
      .then(response => {
        this.team = new TeamViewModel(response.content);
      });
    
  }
}
