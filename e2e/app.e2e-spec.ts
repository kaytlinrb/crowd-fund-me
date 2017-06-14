import { CrowdfundmePage } from './app.po';

describe('crowdfundme App', () => {
  let page: CrowdfundmePage;

  beforeEach(() => {
    page = new CrowdfundmePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
