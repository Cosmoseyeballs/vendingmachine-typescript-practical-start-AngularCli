import { VendingmachineTypescriptPracticalStartAngularCliPage } from './app.po';

describe('vendingmachine-typescript-practical-start-angular-cli App', () => {
  let page: VendingmachineTypescriptPracticalStartAngularCliPage;

  beforeEach(() => {
    page = new VendingmachineTypescriptPracticalStartAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
