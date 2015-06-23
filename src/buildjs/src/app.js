import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {

   router;

  configureRouter(config, router){
      this.router = router;

    config.title = 'Teams';
    config.map([
      { route: '', moduleId: './welcome', nav: true, title: 'Home', name: 'home'},
      { route: 'team/:id',  moduleId: './team', name: 'team', nav: false },
      { route: 'new-team', moduleId: './edit-team', nav: true, title: 'New Team'}
    ]);
  }
}