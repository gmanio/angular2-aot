/**
 * Created on 2017-02-01.
 * @author: Gman Park
 */

import {Component, AfterViewInit, ElementRef, AfterViewChecked, AfterContentInit, AfterContentChecked} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";
import {Observable} from 'rxjs/Rx';

declare var Swiper: any;

@Component({
  moduleId: module.id,
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements AfterContentChecked {
  private mySwiper;

  ngAfterContentChecked(): void {
    setTimeout(() => {
      if(this.mySwiper.hasOwnProperty('params')){
        console.log("test");
        // this.mySwiper.resizeFix(true);
      }
    }, 1000);
  }

  ngAfterViewChecked(): void {
  }

  public static AppKey = 'f2dc1bac4738f37ff5d783ab52a512b5';
  //9VE6rzCQsMyuOLDqmYNe
  //d8s_Kygl3d

  private params: URLSearchParams = new URLSearchParams();
  private searchQuery: string;
  private items: string;

  constructor(public http: Http, private elementRef: ElementRef) {
    this.http = http;

    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // If we need pagination
      pagination: '.swiper-pagination',
      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      observer: true
    })

    // this.params.set('apiKey', MovieComponent.AppKey);
    // this.params.set('output', 'json');

    const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.searchQuery)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe((res) => {
        this.search(res);
      })
  }

  search(searchKeyword) {
    this.params.set('query', searchKeyword);
    this.http.get('/v1/search/movie.json',
      {
        headers: new Headers({'Accept': '*/*', 'X-Naver-Client-Id': '9VE6rzCQsMyuOLDqmYNe', 'X-Naver-Client-Secret': 'd8s_Kygl3d'}),
        search: this.params
      }
    )
      .subscribe(
        (res) => {
          this.render(res.json())
        }, (err) => {
          console.log(err);
        })
  }

  render(res) {
    this.items = res.items;
    console.log(this.items);
  }
}
