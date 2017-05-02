import { EmarketAppPage } from './app.po';

describe('emarket-app App', () => {
  let page: EmarketAppPage;

  beforeEach(() => {
    page = new EmarketAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
