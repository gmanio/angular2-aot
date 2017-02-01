import { RxAngular2Page } from './app.po';

describe('rx-angular2 App', function() {
  let page: RxAngular2Page;

  beforeEach(() => {
    page = new RxAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
