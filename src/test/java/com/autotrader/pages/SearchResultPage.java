package com.autotrader.pages;

import java.util.List;
import java.util.Random;

import org.openqa.selenium.WebElement;

import com.autotrader.helper.Helper;
import com.autotrader.util.Config;

public class SearchResultPage extends Helper
{
	private List<WebElement> result;
	private WebElement overLay;
	private WebElement survey;
	
	
	private void removeSurvey() throws Exception
	{
		try
		{
			survey = getElementById("buttonno");
			survey.click();
		}
		catch(Exception e)
		{
			//do nothing
		}
	}
	
	
	private void removeOverlay() throws Exception
	{
		try
		{
			overLay = getElementByCssSelector(".finance-highlight__button.js-close-finance-highlight.tracking-motoring-products-link");
			overLay.click();
		} 
		catch(Exception e)
		{
			//do nothing
		}
		
		
	}
	
	public void isSearchResultDisplayed() throws Exception
	{
		result = getElementsByCssSelector(Config.listOfResults);
		VerifyListOfElementsAreDisplayed(result);
	}
	
	public ResultDetailPage clickOnOneOfTheResult() throws Exception
	{
		result = getElementsByCssSelector(Config.listOfResults);
		Random ran = new Random();
		
		removeSurvey();
		removeOverlay();
		
		int linkSize = result.size();
		
		if(linkSize > 0)
		{
			int linkNumber = ran.nextInt(linkSize);
			String linkText = result.get(linkNumber).getText();
			storeAValue("clickText", linkText);
			result.get(linkNumber).click();			
		}
		
		return new ResultDetailPage();
	}
}
