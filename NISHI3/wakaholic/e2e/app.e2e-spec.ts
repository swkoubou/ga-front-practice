import { WakaholicPage } from './app.po';

describe('wakaholic App', () => {
  let page: WakaholicPage;

  beforeEach(() => {
    page = new WakaholicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
