$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/addToCart.feature");
formatter.feature({
  "name": "To verify the Add to cart functionality House application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@san"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launches house application",
  "keyword": "Given "
});
formatter.match({
  "location": "Addcart.user_launches_house_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To increase the count of product in add to cart page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@san"
    }
  ]
});
formatter.step({
  "name": "user enter the \"Tables\" in search bar",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProduct.user_enter_the_in_search_bar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProduct.user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the result based on search selected product",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_sees_the_result_based_on_search_selected_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user increase the count in add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_increase_the_count_in_add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the checkout box",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_click_the_checkout_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the add to cart page with increase count",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_sees_the_add_to_cart_page_with_increase_count()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the my cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "Addcart.user_sees_the_my_cart_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/search.feature");
formatter.feature({
  "name": "To verify the search functionality of the application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To verify the search relevance using search bar available",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the \"\u003csearchkey\u003e\" in search bar",
  "keyword": "When "
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.step({
  "name": "user sees the results based on \"\u003csearchkey\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searchkey"
      ]
    },
    {
      "cells": [
        "Tables"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launches house application",
  "keyword": "Given "
});
formatter.match({
  "location": "Addcart.user_launches_house_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the search relevance using search bar available",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the \"Tables\" in search bar",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProduct.user_enter_the_in_search_bar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProduct.user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the results based on \"Tables\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct.user_sees_the_results_based_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify the search relevance using category and sub-category navigation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click the category \"\u003ccategory\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click the sub-category \"\u003csubcategory\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sees the results based on \"\u003ccategory\u003e\" and \"\u003csubcategory\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "category",
        "subcategory"
      ]
    },
    {
      "cells": [
        "Dining",
        "Dinner Sets"
      ]
    },
    {
      "cells": [
        "Cooking",
        "Non-Stick Cookware Sets"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launches house application",
  "keyword": "Given "
});
formatter.match({
  "location": "Addcart.user_launches_house_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: java.util.concurrent.TimeoutException\nBuild info: version: \u00274.2.0\u0027, revision: \u002786eb611648\u0027\nSystem info: host: \u0027ASHAR\u0027, ip: \u0027192.168.1.32\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [df588dee073aaab4147acfc09cdc5de8, get {url\u003dhttps://www.house.com.au/}]\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 110.0.1587.49, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:51506}, msedge: {msedgedriverVersion: 110.0.1587.50 (05bf83b2e806..., userDataDir: C:\\Users\\ASHARU~1\\AppData\\L...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51506/devtoo..., se:cdpVersion: 110.0.1587.49, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: df588dee073aaab4147acfc09cdc5de8\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:65)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:49)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:98)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:566)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:329)\r\n\tat org.base.Baseproject.launchUrl(Baseproject.java:39)\r\n\tat org.stepdefinition.Addcart.user_launches_house_application(Addcart.java:20)\r\n\tat ✽.user launches house application(src/test/resources/Feature/search.feature:4)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.CompletableFuture.timedGet(Unknown Source)\r\n\tat java.util.concurrent.CompletableFuture.get(Unknown Source)\r\n\tat org.asynchttpclient.netty.NettyResponseFuture.get(NettyResponseFuture.java:206)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:59)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:49)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:98)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:566)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:329)\r\n\tat org.base.Baseproject.launchUrl(Baseproject.java:39)\r\n\tat org.stepdefinition.Addcart.user_launches_house_application(Addcart.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To verify the search relevance using category and sub-category navigation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click the category \"Dining\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProduct.user_click_the_category(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the sub-category \"Dinner Sets\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProduct.user_click_the_sub_category(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sees the results based on \"Dining\" and \"Dinner Sets\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProduct.user_sees_the_results_based_on_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launches house application",
  "keyword": "Given "
});
formatter.match({
  "location": "Addcart.user_launches_house_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the search relevance using category and sub-category navigation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click the category \"Cooking\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProduct.user_click_the_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the sub-category \"Non-Stick Cookware Sets\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProduct.user_click_the_sub_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the results based on \"Cooking\" and \"Non-Stick Cookware Sets\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProduct.user_sees_the_results_based_on_and(String,String)"
});
formatter.result({
  "status": "passed"
});
});