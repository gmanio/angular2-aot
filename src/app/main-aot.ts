/**
 * Created on 2017-01-31.
 * @author: Gman Park
 */

import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../../aot/src/app/app.module.ngfactory';
console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);