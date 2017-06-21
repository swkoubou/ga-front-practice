import { UserNewPage } from './app.po';

describe('user-new App', function() {
  let page: UserNewPage;

  beforeEach(() => {
    page = new UserNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
