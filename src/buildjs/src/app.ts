import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {

   router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
      this.router = router;

    config.title = 'Teams';
    config.map([
      { route: '', moduleId: './welcome', nav: true, title: 'Home', name: 'home'},
      { route: 'team/:id',  moduleId: './team', name: 'team', nav: false },
      { route: 'new-team', moduleId: './edit-team', nav: true, title: 'New Team' },
      { route: 'add-chat', moduleId: './add-chat', nav: true, title: 'Chat' },
      { route: 'spike', moduleId: './spike', nav: true, title: 'Spike'}
    ]);
  }
} 