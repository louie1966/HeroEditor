import { HeroEditPage } from './app.po';

describe('hero-edit App', () => {
  let page: HeroEditPage;

  beforeEach(() => {
    page = new HeroEditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
