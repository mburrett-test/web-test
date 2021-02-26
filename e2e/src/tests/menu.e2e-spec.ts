import {browser, logging} from 'protractor';
import {AppPage} from '../app.po';

describe('Menu Component', () => {
  let page: AppPage;
  const url = browser.baseUrl;

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo(url);
  });

  it('should display the menu title', async () => {
    const text = await page.getMenuTitleText();
    expect(text).toEqual('Menu');
  });

  it('should display three items in the menu', async () => {
    const menuItemsCount = await page.getMenuItemEls().count();
    expect(menuItemsCount).toEqual(3);
  });

  it('should show the "start" content if the "home" item is clicked', async () => {
    await page.getMenuItemEls().get(0).click();
    // TODO validate the correct content is shown when the 1st menu item is clicked
  });

  it('should show the "first" content if the "first component" item is clicked', async () => {
    await page.getMenuItemEls().get(1).click();
    // TODO validate the correct content is shown when the 2nd menu item is clicked
  });

  it('should show the "second" content if the "second component" item is clicked', async () => {
    await page.getMenuItemEls().get(2).click();
    // TODO validate the correct content is shown when the 3rd menu item is clicked
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
