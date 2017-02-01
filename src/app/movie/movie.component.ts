/**
 * Created on 2017-02-01.
 * @author: Gman Park
 */

import {Component, AfterViewInit} from "@angular/core";

declare var Swiper: any;

@Component({
    moduleId: module.id,
    selector: 'movie',
    templateUrl: './movie.component.html'
})

export class MovieComponent implements AfterViewInit {
    ngAfterViewInit(): void {

    }

    constructor() {
        let url = 'https://apis.daum.net/contents/movie?apikey=f2dc1bac4738f37ff5d783ab52a512b5&q=%EC%98%81%ED%99%94&output=json';
        console.log("test");

        var mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'vertical',
            loop: true,

            // If we need pagination
            pagination: '.swiper-pagination',

            // Navigation arrows
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        })
    }
}