/**
 * Created on 2017-01-31.
 * @author: Gman Park
 */

console.log('hello');
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);