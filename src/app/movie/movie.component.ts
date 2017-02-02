/**
 * Created on 2017-02-01.
 * @author: Gman Park
 */

import {Component, ElementRef} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";
import {Observable} from 'rxjs/Rx';

declare var Swiper: any;

@Component({
  moduleId: module.id,
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent {
  public static ClientId = '9VE6rzCQsMyuOLDqmYNe';
  public static ClientSecret = 'd8s_Kygl3d';

  private mySwiper: any;
  private params: URLSearchParams = new URLSearchParams();
  private searchQuery: string;
  private items;

  constructor(public http: Http, private elementRef: ElementRef) {
    this.http = http;

    const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.searchQuery)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe((res) => {
        this.search(res);
      })
  }

  search(searchKeyword) {
    // parameter set
    this.params.set('query', searchKeyword);
    this.params.set('display', '100');

    this.http.get('/v1/search/movie.json', {
      headers: new Headers({'Accept': '*/*', 'X-Naver-Client-Id': MovieComponent.ClientId, 'X-Naver-Client-Secret': MovieComponent.ClientSecret}),
      search: this.params
    })
      .subscribe(
        (res) => {
          this.render(res.json())
        }, (err) => {
          console.log(err);
        })
  }

  render(res) {
    console.log(res);
    if (res.items.length != 0) {
      this.items = res.items;
    } else {
      this.items = [];
    }

    setTimeout(() => {
      if (!this.mySwiper) {

        //initialized Swiper.
        this.mySwiper = new Swiper('.swiper-container', {
          // Optional parameters
          direction: 'horizontal',
          loop: true,
          // If we need pagination
          pagination: '.swiper-pagination',
          // Navigation arrows
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          observer: true,
          observeParents: true
        })

      } else {
        // if (this.items.length == 0) {
        //   this.mySwiper.destroy(true, true);
        // } else {
        //   this.mySwiper.update();
        // }
      }
    }, 1000);
  }
}
