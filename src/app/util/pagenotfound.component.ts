/**
 * Created on 2017-02-03.
 * @author: Gman Park
 */
import {Component} from '@angular/core';

@Component({
  styleUrls: ['pagenotfound.component.css'],
  template: `
        <div>
            <h3>Angular2 Router</h3>
            <p> Sorry.. Something is wrong. </p>
            <span>{{title}}</span>
        </div>`,
})

export class PageNotFoundComponent {
  title = ' Page Not Found ';
}
