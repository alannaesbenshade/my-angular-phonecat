'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing
describe('PhoneCat Application', function() {

  describe('phoneList', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    // it('should filter the phone list as a user types into the search box', function() {
    //   var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
    //   var query = element(by.model('$ctrl.query'));
    //
    //   expect(phoneList.count()).toBe(3);
    //
    //   query.sendKeys('nexus');
    //   expect(phoneList.count()).toBe(1);
    //
    //   query.clear();
    //   query.sendKeys('motorola');
    //   expect(phoneList.count()).toBe(2);
    // });

    it('should render phone specific links', function() {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('nexus');

      element.all(by.css('.phones li a')).first().click();
      expect(browser.getLocationAbsUrl()).toBe('/phones/nexus-s');
    });

  });

});
