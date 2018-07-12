$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/outline.feature");
formatter.feature({
  "line": 1,
  "name": "TestAnnotations",
  "description": "",
  "id": "testannotations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Test ikman.lk website",
  "description": "",
  "id": "testannotations;test-ikman.lk-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am open the ikman website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the property link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on House link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on colombo link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Price link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can Select min as \"\u003c5000000\u003e\" and max as \"\u003c75000000\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click Apply Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Beds link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Select the number of Beds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Get the number of Ads count and print it as No of Ads Found",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Get the Price of the No of Ads found and print them all",
  "keyword": "And "
});
formatter.match({
  "location": "TestAnnotations.i_am_open_the_ikman_website()"
});
formatter.result({
  "duration": 67743724220,
  "status": "passed"
});
formatter.match({
  "location": "TestAnnotations.i_click_on_the_property_link()"
});
formatter.result({
  "duration": 39203581661,
  "status": "passed"
});
formatter.match({
  "location": "TestAnnotations.i_click_on_House_link()"
});
formatter.result({
  "duration": 5924864713,
  "status": "passed"
});
formatter.match({
  "location": "TestAnnotations.i_click_on_colombo_link()"
});
formatter.result({
  "duration": 66567796239,
  "status": "passed"
});
formatter.match({
  "location": "TestAnnotations.i_click_on_Price_link()"
});
formatter.result({
  "duration": 6839800169,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-7NDVP3H\u0027, ip: \u0027172.26.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\SHEHAN~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: 25353042de5d8e80fef86a9892960ee5\n*** Element info: {Using\u003dcss selector, value\u003dbody \u003e div.app-content \u003e div \u003e div.serp-listing \u003e div.ui-panel.is-rounded.serp-panel \u003e div.ui-panel-content.ui-panel-block \u003e div:nth-child(1) \u003e div.col-12.lg-3.lg-filter-area \u003e div \u003e div \u003e form \u003e div \u003e div.ui-accordion-item.filter-price \u003e a \u003e span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinition.TestAnnotations.i_click_on_Price_link(TestAnnotations.java:50)\r\n\tat ✽.And I click on Price link(src/test/resources/outline.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c5000000\u003e",
      "offset": 21
    },
    {
      "val": "\u003c75000000\u003e",
      "offset": 44
    }
  ],
  "location": "TestAnnotations.i_can_Select_min_as_and_max_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestAnnotations.i_click_Apply_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestAnnotations.i_click_on_Beds_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestAnnotations.i_Select_the_number_of_Beds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestAnnotations.get_the_number_of_Ads_count_and_print_it_as_No_of_Ads_Found()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestAnnotations.get_the_Price_of_the_No_of_Ads_found_and_print_them_all()"
});
formatter.result({
  "status": "skipped"
});
});