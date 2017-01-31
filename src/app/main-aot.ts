/**
 * Created on 2017-01-31.
 * @author: Gman Park
 */

import {platformBrowser}    from '@angular/platform-browser';
import {AppModuleNgFactory} from '../../aot/src/app/app.module.ngfactory';
import {enableProdMode} from "@angular/core";

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);