/**
 * Created on 2017-02-01.
 * @author: Gman Park
 */

import {Component, AfterViewInit} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";

declare var Swiper: any;

@Component({
  moduleId: module.id,
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements AfterViewInit {
  public static AppKey = 'f2dc1bac4738f37ff5d783ab52a512b5';
  private params: URLSearchParams = new URLSearchParams();

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // If we need pagination
      pagination: '.swiper-pagination',
      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    })
  }

  constructor(public http: Http) {
    this.http = http;

    this.params.set('apiKey', MovieComponent.AppKey);
    this.params.set('q', '인생');
    this.params.set('output', 'json');

    this.http.get('/contents/movie', {headers: new Headers({'Accept': '*/*'}), search: this.params})
      .subscribe(
        (res) => {
          console.log(res.json());
        }, (err) => {
          console.log(err);
        })
  }
}
