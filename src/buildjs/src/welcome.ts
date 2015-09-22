import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {TeamViewModel} from './models/team-view-model';

@inject(HttpClient)
export class App {
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  httpClient: HttpClient;
  teams: Array<TeamViewModel>;

  activate() {
    return this.httpClient.get('./team')
      .then(response => {
        
        var teamsJson = response.content;
        
        this.teams = new Array(teamsJson.length); 
        
        for (var i=0; i < teamsJson.length; i++) {
          this.teams[i] = new TeamViewModel(teamsJson[i]);
        }
      });
  } 
}
