package com.autotrader.pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import com.autotrader.helper.Helper;

public class ResultDetailPage extends Helper
{
	private WebElement resultText;
	
	public void isTheCorrectResultDisplayed() throws Exception
	{
		resultText = getElementByClassName("vehicle-title__text");
		
		String rTest = resultText.getText();
		String searchText = getStoredValue("clickText");
		
		Assert.assertTrue(rTest.toLowerCase().contains(searchText.toLowerCase()));
	}
}
