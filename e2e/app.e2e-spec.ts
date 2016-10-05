import { Angular2FunPage } from './app.po';

describe('angular2-fun App', function() {
  let page: Angular2FunPage;

  beforeEach(() => {
    page = new Angular2FunPage();
  });

  it('should display message saying "Angular 2 Fun!,' () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular 2 Fun!');
  });
});
