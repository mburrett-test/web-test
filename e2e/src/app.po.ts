import {browser, by, element, ElementArrayFinder, ElementFinder} from 'protractor';

export class AppPage {
  // utility methods

  private static getElByCss(css: string): ElementFinder {
    return element(by.css(css));
  }

  private static getAllElsByCss(css: string): ElementArrayFinder {
    return element.all(by.css(css));
  }

  async navigateTo(url: string): Promise<unknown> {
    return browser.get(url);
  }

  // app component

  async getAppTitleText(): Promise<string> {
    return AppPage.getElByCss('app-root h1#app--title').getText();
  }

  async getAppContentText(): Promise<string> {
    return AppPage.getElByCss('app-root div#app--content').getText();
  }

  // menu component

  getMenuComponent(): ElementFinder {
    return AppPage.getElByCss('app-menu');
  }

  async getMenuTitleText(): Promise<string> {
    return AppPage.getElByCss('app-menu h3').getText();
  }

  getMenuItemEls(): ElementArrayFinder {
    return AppPage.getAllElsByCss('app-menu li');
  }
  // start component

  getStartComponent(): ElementFinder {
    return AppPage.getElByCss('app-start');
  }

  getStartPageContentEl(): ElementFinder {
    return AppPage.getElByCss('app-start div#app-start');
  }

  async getStartPageContentText(): Promise<string> {
    return this.getStartPageContentEl().getText();
  }

  // first component

  getFirstComponent(): ElementFinder {
    return AppPage.getElByCss('app-first');
  }

  // second component

  getSecondComponent(): ElementFinder {
    return AppPage.getElByCss('app-second');
  }

  // general elements

  getHomeLinkEl(): ElementFinder {
    return AppPage.getElByCss('a.link--home');
  }
}
