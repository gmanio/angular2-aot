import {Component, AfterViewInit} from '@angular/core';

declare var Swiper:any;

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <div class="swiper-container" style="width: 600px; height: 300px;">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
    
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
    </div>
`
})

export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        var mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'vertical',
            loop: true,

            // If we need pagination
            pagination: '.swiper-pagination',

            // Navigation arrows
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',

            // And if we need scrollbar
            scrollbar: '.swiper-scrollbar',
        })
    }

    constructor() {

    }
}

//swiper/dist/swiper.min.css
//swiper/dist/swiper.js