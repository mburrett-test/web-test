import {browser, logging} from 'protractor';
import {AppPage} from '../app.po';

describe('App Component', () => {
  let page: AppPage;
  const url = browser.baseUrl;

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo(url);
  });

  it('Should redirect to the "start" url when the root url is loaded.', async () => {
    const urlCurrent = await browser.getCurrentUrl();
    expect(urlCurrent).toEqual(`${browser.baseUrl}start`);
  });

  it('should display the app title', async () => {
    const text = await page.getAppTitleText();
    expect(text).toEqual('Jumio Test Web App');
  });

  it('should display the app welcome message', async () => {
    const text = await page.getAppContentText();
    expect(text).toEqual('Welcome!');
  });

  it('should display the app menu block', async () => {
    const isPresent = page.getMenuComponent().isPresent();
    expect(isPresent).toBeTruthy();
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
