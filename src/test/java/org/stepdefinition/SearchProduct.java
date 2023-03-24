package org.stepdefinition;

import java.time.Duration;

import org.base.Baseproject;
import org.objectrepository.ProductPojo;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchProduct extends Baseproject {
	ProductPojo p;

	// search1
	
	@When("user enter the {string} in search bar")
	public void user_enter_the_in_search_bar(String searchkey) {
		p = new ProductPojo();
		enterText(p.getSearch(),searchkey);
	}

	@When("user click search button")
	public void user_click_search_button() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		clickElement(p.getSearchbutton());
		Thread.sleep(3000);
	clickElement(p.getPrdctnmeclick());

	}

	@Then("user sees the results based on {string}")
	public void user_sees_the_results_based_on(String string) {
		System.out.println("user see the product result");
	}

	// search2
	@When("user click the category {string}")
	public void user_click_the_category(String category) throws InterruptedException {
		Actions a = new Actions(driver);
		WebElement dining = driver.findElement(By.xpath("//a[text()='" + category + "']"));
		a.moveToElement(dining).build().perform();

		Thread.sleep(3000);
	}

	@When("user click the sub-category {string}")
	public void user_click_the_sub_category(String subcategory) throws InterruptedException {
		WebElement subcategories = driver.findElement(By.xpath("//span[text()='" + subcategory + "']"));
		javaScriptClick(subcategories);
		Thread.sleep(3000);
	}

	@When("user sees the results based on {string} and {string}")
	public void user_sees_the_results_based_on_and(String string, String string2) {
		System.out.println("user see the result");
	}

}
