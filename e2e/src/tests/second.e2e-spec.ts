import {browser, logging} from 'protractor';
import {AppPage} from '../app.po';

describe('Second Component', () => {
  let page: AppPage;
  const url = `${browser.baseUrl}/second`;

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo(url);
  });

  // TODO add some test coverage for the button / img interaction

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
