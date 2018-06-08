package com.autotrader.pages;

import org.openqa.selenium.WebElement;

import com.autotrader.helper.Helper;
import com.autotrader.util.Config;

public class Homepage extends Helper{
	
	private WebElement postcode;
	private WebElement distance;
	private WebElement make;
	private WebElement searchButton;
	private WebElement cookie;
	
	
	private void closeCookiePolicy() throws Exception
	{
		cookie = getElementById("js-cookie-alert-close");
		cookie.click();
	}
	
	public void enterPostcode() throws Exception
	{
		closeCookiePolicy();
		postcode = getElementById(Config.postcodeElement);
		postcode.sendKeys(Config.postcodeValue);
	}
	
	public void selectDistance() throws Exception
	{
		distance = getElementById(Config.distanceElement);
		selectByText(distance, Config.distanceValue);
	}
	
	public void selectModel() throws Exception
	{
		make = getElementById(Config.makeElement);
		selectByValue(make, Config.makeValue);
	}
	
	public SearchResultPage clickOnSearchButton() throws Exception
	{
		searchButton = getElementById(Config.searchButtonElement);
		searchButton.click();
		
		return new SearchResultPage();
	}

}
