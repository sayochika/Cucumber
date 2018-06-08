package com.autotrader.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"classpath:com/autotrader/specifications"},
		plugin = {"pretty", "html:target/cucumber-html-report"},
		glue = {"com/autotrader/hooks", "com/autotrader/stepDefinitions"},
		monochrome = false,
		dryRun = false
		
		)
public class Runner {

}
