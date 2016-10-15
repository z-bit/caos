import { ClimsPage } from './app.po';

describe('clims App', function() {
  let page: ClimsPage;

  beforeEach(() => {
    page = new ClimsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
