import { MyprofilePage } from './app.po';

describe('myprofile App', function() {
  let page: MyprofilePage;

  beforeEach(() => {
    page = new MyprofilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
