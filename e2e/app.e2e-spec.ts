import { BrestovRedesignPage } from './app.po';

describe('brestov-redesign App', function() {
  let page: BrestovRedesignPage;

  beforeEach(() => {
    page = new BrestovRedesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
