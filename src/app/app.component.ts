import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: '<movie></movie>'
})

export class AppComponent {
    constructor() {
        this.printConsoleLogo();
    }

    printConsoleLogo(){
        setTimeout(console.log.bind(console, "%cGMAN", "font:6em Arial;color:#EC6521;font-weight:bold"), 0);
        setTimeout(console.log.bind(console, "%cDevTools@2017", "font:2em sans-serif;color:#333;"), 0);
    }
}