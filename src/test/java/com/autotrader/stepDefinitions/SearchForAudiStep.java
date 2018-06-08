package com.autotrader.stepDefinitions;

import com.autotrader.helper.Helper;
import com.autotrader.pages.Homepage;
import com.autotrader.pages.ResultDetailPage;
import com.autotrader.pages.SearchResultPage;
import com.autotrader.util.Config;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchForAudiStep extends Helper{
	
	Homepage homepage = new Homepage();
	SearchResultPage searchResult = new SearchResultPage();
	ResultDetailPage detailPage = new ResultDetailPage();

@Given("^I am on Autotrader Homepage$")
public void i_am_on_Autotrader_Homepage() throws Throwable {
    launchUrl(Config.url);
}

@When("^I enter my postcode$")
public void i_enter_my_postcode() throws Throwable {
    homepage.enterPostcode();
}

@When("^I select a distance to postcode$")
public void i_select_a_distance_to_postcode() throws Throwable {
    homepage.selectDistance();
}

@When("^I select a car of my choice$")
public void i_select_a_car_of_my_choice() throws Throwable {
    homepage.selectModel();
}

@When("^I click on Search for Car button$")
public void i_click_on_Search_for_Car_button() throws Throwable {
    searchResult = homepage.clickOnSearchButton();
}

@Then("^the result for the car for is displayed$")
public void the_result_for_the_car_for_is_displayed() throws Throwable {
	
	searchResult.isSearchResultDisplayed();
    
}

@Then("^the result clicked on is displayed$")
public void the_result_clicked_on_is_displayed() throws Throwable {
   detailPage = searchResult.clickOnOneOfTheResult();
   detailPage.isTheCorrectResultDisplayed();
}



}
