import {browser, logging} from 'protractor';
import {AppPage} from '../app.po';

describe('First Component', () => {
  let page: AppPage;
  const url = `${browser.baseUrl}/first`;

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo(url);
  });

  it('should link back to the start page', async () => {
    await page.getHomeLinkEl().click();
    const urlCurrent = await browser.getCurrentUrl();
    expect(urlCurrent).toEqual(`${browser.baseUrl}start`);
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
