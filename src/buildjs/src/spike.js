﻿import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import S from 'stringjs';

@inject(HttpClient,Router)
export class EditTeam {

    constructor(http,router){
        this.http = http;
        this.router = router;
        this.colour = '#ffffff';
    }

    get hexOnly(){
        return this.colour.substring(1); 
    }

    get intValue(){
        return Number.parseInt(this.hexOnly, 16);
    }

    get backToHex(){
        var hex=this.intValue.toString(16);
        hex = S(hex).padLeft(6,'0');
        return '#'+hex;
    }
}