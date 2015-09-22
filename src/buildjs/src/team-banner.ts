import {bindable,computedFrom} from 'aurelia-framework';
import {TeamViewModel} from 'models/team-view-model';

export class TeamBannerCustomElement {
    @bindable team: TeamViewModel;
    @bindable showsubtitle: string;

    constructor() {
        this.showsubtitle = 'true';
    }

    @computedFrom('showsubtitle')
    get isSubTitleDisplayed(){
        return this.showsubtitle == 'true';
    }
}