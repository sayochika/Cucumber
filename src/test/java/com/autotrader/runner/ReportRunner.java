package com.autotrader.runner;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.GregorianCalendar;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"com.cucumber.listener.ExtentCucumberFormatter"}
							,features = {"classpath:com/autotrader/specifications"}
							,glue = {"com/autotrader/hooks", "com/autotrader/stepDefinitions"}
							,monochrome = false
							,dryRun = false
							,tags = {"~@ignore"}
					)
public class ReportRunner {
 
    @BeforeClass
    public static void setup() {
    	
    	String dateNow = new SimpleDateFormat("ddMMyy").format(new GregorianCalendar().getTime());
		String timeNow = new SimpleDateFormat("hhmmss").format(new GregorianCalendar().getTime());
		
		String fileName = String.format("./report/%s/report_%s.html", dateNow, timeNow);
		
        // Initiates the extent report and generates the output in the output/Run_<unique timestamp>/report.html file by default.
        ExtentCucumberFormatter.
        	initiateExtentCucumberFormatter(new File(fileName));
 
        // Loads the extent config xml to customize on the report.
        ExtentCucumberFormatter.loadConfig(new File("src/test/java/com/autotrader/util/extent-config.xml"));
 
        // User can add the system information as follows
        ExtentCucumberFormatter.addSystemInfo("Browser Name", "Chrome");
        ExtentCucumberFormatter.addSystemInfo("Browser version", "v2.27");
        ExtentCucumberFormatter.addSystemInfo("Selenium version", "v3.4.0");
 
        
    }
 
}