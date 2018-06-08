$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/autotrader/specifications/Search.feature");
formatter.feature({
  "line": 1,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 31481578054,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I want to write a step with precondition",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "some other precondition",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I complete action",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "some other action",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "yet another action",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "check more outcomes",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStep.i_want_to_write_a_step_with_precondition()"
});
formatter.result({
  "duration": 1037919716,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.some_other_precondition()"
});
formatter.result({
  "duration": 137160,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.i_complete_action()"
});
formatter.result({
  "duration": 41988,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.some_other_action()"
});
formatter.result({
  "duration": 55051,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.yet_another_action()"
});
formatter.result({
  "duration": 41988,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 30791,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.check_more_outcomes()"
});
formatter.result({
  "duration": 39655,
  "status": "passed"
});
formatter.after({
  "duration": 1728684622,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I want to write a step with \u003cname\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I check for the \u003cvalue\u003e in step",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I verify the \u003cstatus\u003e in step",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ],
      "line": 19,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;1"
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ],
      "line": 20,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;2"
    },
    {
      "cells": [
        "name2",
        "7",
        "Fail"
      ],
      "line": 21,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6581926740,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I want to write a step with name1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I check for the 5 in step",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I verify the success in step",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "SearchStep.i_want_to_write_a_step_with_name(int)"
});
formatter.result({
  "duration": 13009709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "SearchStep.i_check_for_the_in_step(int)"
});
formatter.result({
  "duration": 177282,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.i_verify_the_success_in_step()"
});
formatter.result({
  "duration": 113367,
  "status": "passed"
});
formatter.after({
  "duration": 1346061724,
  "status": "passed"
});
formatter.before({
  "duration": 6244241596,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I want to write a step with name2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I check for the 7 in step",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I verify the Fail in step",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "SearchStep.i_want_to_write_a_step_with_name(int)"
});
formatter.result({
  "duration": 230001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 16
    }
  ],
  "location": "SearchStep.i_check_for_the_in_step(int)"
});
formatter.result({
  "duration": 531380,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.i_verify_the_Fail_in_step()"
});
formatter.result({
  "duration": 44787,
  "status": "passed"
});
formatter.after({
  "duration": 1194753289,
  "status": "passed"
});
formatter.uri("com/autotrader/specifications/SearchForAudi.feature");
formatter.feature({
  "line": 1,
  "name": "Search",
  "description": "As a customer\r\nI want to be able to search for cars with chosen parameters\r\nSO that I can buy a car",
  "id": "search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6901348557,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Search for a particular car",
  "description": "",
  "id": "search;search-for-a-particular-car",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Autotrader Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter my postcode",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select a distance to postcode",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select a car of my choice",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Search for Car button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the result for the car for is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchForAudiStep.i_am_on_Autotrader_Homepage()"
});
formatter.result({
  "duration": 5277381692,
  "status": "passed"
});
formatter.match({
  "location": "SearchForAudiStep.i_enter_my_postcode()"
});
formatter.result({
  "duration": 1493750805,
  "status": "passed"
});
formatter.match({
  "location": "SearchForAudiStep.i_select_a_distance_to_postcode()"
});
formatter.result({
  "duration": 353618608,
  "status": "passed"
});
formatter.match({
  "location": "SearchForAudiStep.i_select_a_car_of_my_choice()"
});
formatter.result({
  "duration": 364015272,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d67.0.3396.62)\n  (Driver info: chromedriver\u003d2.39.562718 (9a2698cba08cf5a471a29d30c8b3e12becabb0e9),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027BUSINESS-PC\u0027, ip: \u0027192.168.1.67\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.39.562718 (9a2698cba08cf5..., userDataDir: C:\\Users\\Sayo\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.62, webStorageEnabled: true}\nSession ID: ebc7c536a80be4eb3e0a0269eefe7704\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isSelected(RemoteWebElement.java:140)\r\n\tat org.openqa.selenium.support.ui.Select.setSelected(Select.java:322)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:201)\r\n\tat com.autotrader.helper.Helper.selectByValue(Helper.java:154)\r\n\tat com.autotrader.pages.Homepage.selectModel(Homepage.java:31)\r\n\tat com.autotrader.stepDefinitions.SearchForAudiStep.i_select_a_car_of_my_choice(SearchForAudiStep.java:34)\r\n\tat ✽.And I select a car of my choice(com/autotrader/specifications/SearchForAudi.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchForAudiStep.i_click_on_Search_for_Car_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchForAudiStep.the_result_for_the_car_for_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9899501558,
  "status": "passed"
});
});