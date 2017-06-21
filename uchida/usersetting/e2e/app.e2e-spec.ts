import { UsersettingPage } from './app.po';

describe('usersetting App', function() {
  let page: UsersettingPage;

  beforeEach(() => {
    page = new UsersettingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
