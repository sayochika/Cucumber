package com.autotrader.hooks;

import com.autotrader.helper.Helper;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook extends Helper
{
		
	@Before
	public void setUp() throws Exception
	{
		LaunchBrowser("Chrome");
	}
	
	@After
	public void tearDown() throws Exception
	{
		closeBrowser();
	}
}
