import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .globalResources('is-empty-value-converter')
        .plugin('aurelia-animator-css');

  aurelia.start().then(a => a.setRoot());
}
