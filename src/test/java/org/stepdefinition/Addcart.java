package org.stepdefinition;

import org.base.Baseproject;
import org.junit.Assert;
import org.objectrepository.ProductPojo;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Addcart extends Baseproject {
	ProductPojo p;

	@Given("user launches house application")
	public void user_launches_house_application() throws InterruptedException {
		launchBrowser();
		launchUrl("https://www.house.com.au/");
		windowMaximize();
		Thread.sleep(3000);
	}

	
	@When("user sees the result based on search selected product")
	public void user_sees_the_result_based_on_search_selected_product() {
		System.out.println("user see the product");
	}

	@When("user increase the count in add to cart")
	public void user_increase_the_count_in_add_to_cart() throws InterruptedException {
		
		p= new ProductPojo();
		Thread.sleep(3000);
		javaScriptClick(p.getIncreasecount());
		Thread.sleep(3000);
		javaScriptClick(p.getAddcrtbutton());
		Thread.sleep(3000);
	}

	@When("user sees the add to cart page with increase count")
	public void user_sees_the_add_to_cart_page_with_increase_count() throws InterruptedException {
		p = new ProductPojo();
		Actions a = new Actions(driver);
		WebElement mycart = driver.findElement(By.xpath("//span[@class='cart-item-count']"));
		a.moveToElement(mycart).build().perform();
		
		Assert.assertTrue("product not displayed", p.getMycartpage().isDisplayed());

		Thread.sleep(3000);
	}

	@When("user click the checkout box")
	public void user_click_the_checkout_box() throws InterruptedException {
		Thread.sleep(3000);
		clickElement(p.getCheckoutbutton());
		Thread.sleep(3000);
	}

	@Then("user sees the my cart page")
	public void user_sees_the_my_cart_page() {
		p = new ProductPojo();
		Assert.assertTrue("product not displayed", p.getQuantity().isDisplayed());
	}

}
