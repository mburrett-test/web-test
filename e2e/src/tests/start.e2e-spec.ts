import {browser, logging} from 'protractor';
import {AppPage} from '../app.po';

describe('Start Component', () => {
  let page: AppPage;
  const url = `${browser.baseUrl}/start`;

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo(url);
  });

  it('should display the start page content text', async () => {
    const text = await page.getStartPageContentText();
    expect(text).toEqual('Home\nThis is the Jumio Dummy Web App\nFeel free to take a look around.');
  });

  it('should display the start page content with the correct background colour', async () => {
    const bgCol = await page.getStartPageContentEl().getCssValue('background-color');
    expect(bgCol).toEqual('rgba(204, 255, 255, 1)');
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
