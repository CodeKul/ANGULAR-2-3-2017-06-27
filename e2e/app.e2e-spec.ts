import { AfternoonPage } from './app.po';

describe('afternoon App', () => {
  let page: AfternoonPage;

  beforeEach(() => {
    page = new AfternoonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
