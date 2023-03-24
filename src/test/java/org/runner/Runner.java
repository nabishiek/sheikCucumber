package org.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//resources",glue="org.stepdefinition",dryRun=false,monochrome=true,
plugin= {"pretty","html:src\\test\\resources\\Reports",
		"json:src\\test\\resources\\Reports\\Mizal.json",
		"junit:src\\test\\resources\\Reports\\Sharu.xml"
		
		})
public class Runner {

}
