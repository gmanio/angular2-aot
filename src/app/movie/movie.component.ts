/**
 * Created on 2017-02-01.
 * @author: Gman Park
 */

import {Component, ElementRef} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

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

  private oSwiper: any;
  private params: URLSearchParams = new URLSearchParams();
  private searchQuery: string;
  private items;

  constructor(public http: Http, private elementRef: ElementRef) {
    this.http = http;

    const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .debounceTime(500)
      .map(() => this.searchQuery)
      .distinctUntilChanged()
      .subscribe((res) => {
        this.search(res);
      })

    this.search('movie'); // initial search
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
    this.items = res.items;
console.log(this.items[0]);
    setTimeout(() => {
      if (!this.oSwiper) {

        //initialized Swiper.
        this.oSwiper = new Swiper('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          pagination: '.swiper-pagination',
          onDestroy: () => {
            this.oSwiper = null;
          }
        })

      } else {
        if (this.items.length == 0) {
          this.oSwiper.destroy(true, true);
        } else {
          this.oSwiper.update();
        }
      }
    }, 100);
  }
}
