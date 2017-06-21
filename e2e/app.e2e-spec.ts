import { AdvancePage } from './app.po';

describe('advance App', () => {
  let page: AdvancePage;

  beforeEach(() => {
    page = new AdvancePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
