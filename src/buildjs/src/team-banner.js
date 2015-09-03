import {bindable} from 'aurelia-framework';
import {TeamViewModel} from 'models/team-view-model';

export class TeamBannerCustomElement {
    @bindable team: TeamViewModel;
    @bindable showsubtitle: Boolean;

    constructor() {
        this.showsubtitle = false;
    }
}