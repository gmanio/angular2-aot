/**
 * Created on 2017-02-01.
 * @author: Gman Park
 */

import {Component, AfterViewInit, ElementRef} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";
import {Observable} from 'rxjs/Rx';

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
  private searchQuery: string;

  ngAfterViewInit(): void {
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

  constructor(public http: Http, private elementRef: ElementRef) {
    this.http = http;

    this.params.set('apiKey', MovieComponent.AppKey);
    this.params.set('output', 'json');

    const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.searchQuery)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(this.search)
  }

  search(searchKeyword) {
    this.params.set('q', searchKeyword);

    this.http.get('/contents/movie', {headers: new Headers({'Accept': '*/*'}), search: this.params})
      .subscribe(
        (res) => {
          this.render(res.json())
        }, (err) => {
          console.log(err);
        })
  }

  render(res){

  }
}
