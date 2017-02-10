/**
 * Created on 2017-02-01.
 * @author: Gman Park
 */

import {Component, ElementRef} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';

declare var Swiper: any;

@Component({
  moduleId: module.id,
  selector: 'app-movie',
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
    Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .debounceTime(500)
      .map(() => this.searchQuery)
      .distinctUntilChanged()
      .subscribe((res) => {
        this.search(res);
      });

    this.searchQuery = 'movie';
    /*init keyword*/
    this.search(this.searchQuery); // initial search
  }

  search(searchKeyword) {
    // parameter set
    this.params.set('query', searchKeyword);
    this.params.set('display', '10');

    this.getMovieList().subscribe(
      (res) => {
        this.render(res.json());
      }, (err) => {
        console.log(err);
      });
  }

  getMovieList() {
    return this.http.get('/v1/search/movie.json', {
      headers: new Headers({
        'Accept': '*/*',
        'X-Naver-Client-Id': MovieComponent.ClientId,
        'X-Naver-Client-Secret': MovieComponent.ClientSecret
      }),
      search: this.params
    });
  }

  render(res) {
    this.items = res.items;

    setTimeout(() => {
      if (!this.oSwiper) {
        this.oSwiper = new Swiper('.swiper-container', {
          direction: 'horizontal',
          pagination: '.swiper-pagination',
          observer: true,
          observeParents: true
        });
      } else {
        this.oSwiper.update(true);
      }
      ;
    }, 400);

  }
}
