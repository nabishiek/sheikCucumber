package org.objectrepository;

import org.base.Baseproject;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductPojo extends Baseproject {
	public ProductPojo() {

		PageFactory.initElements(driver, this);

	}

	@FindBy(xpath = "//input[@class='product-search-autocomplete k-input']")
	private WebElement search;

	@FindBy(xpath = "//button[@class='btn search cv-ico-general-search']")
	private WebElement searchbutton;

	@FindBy(xpath = "//a[text()='Alex Liddy Acacia Picnic Table 40cm']")
	private WebElement prdctnmeclick;

	@FindBy(xpath = "(//button[@class='btn cv-checkout'])[2]")
	private WebElement checkoutbutton;

	public WebElement getCheckoutbutton() {
		return checkoutbutton;
	}

	@FindBy(xpath = "//a[text()='Kitchen']")
	private WebElement kitchenbutton;

	@FindBy(xpath = "//a[text()='Kitchen Utensils']")
	private WebElement kitchenutensilbutton;

	@FindBy(xpath = "//a[text()='Utensil Sets']")
	private WebElement kitchenutensilsetbutton;

	@FindBy(xpath = "//a[text()='Scullery Bamboo Utensils Set of 3']")
	private WebElement kitchenutensilbamboobutton;

	public WebElement getKitchenbutton() {
		return kitchenbutton;
	}

	public WebElement getKitchenutensilbutton() {
		return kitchenutensilbutton;
	}

	public WebElement getKitchenutensilsetbutton() {
		return kitchenutensilsetbutton;
	}

	public WebElement getKitchenutensilbamboobutton() {
		return kitchenutensilbamboobutton;
	}

	public WebElement getSearch() {
		return search;
	}

	public WebElement getSearchbutton() {
		return searchbutton;
	}

	public WebElement getPrdctnmeclick() {
		return prdctnmeclick;
	}

	public WebElement getAddcrtbutton() {
		return addcrtbutton;
	}

	@FindBy(xpath = "//button[@class='widget-product-add-to-cart   btn cv-add-to-cart']")
	private WebElement addcrtbutton;

	@FindBy(xpath = "//span[@class='cv-link form-number-plus']")
	private WebElement increasecount;

	@FindBy(xpath = "//h1[contains(text(),'Non-Stick Cookware Sets')]")
	private WebElement nonstick;

	@FindBy(xpath = "//span[@class='widget-product-qty']")
	private WebElement quantity;


	@FindBy(xpath = "//h1[text()='My Cart']")
	private WebElement mycartpage;

	public WebElement getMycartpage() {
		return mycartpage;
	}

	@FindBy(xpath = "//h1[text()='Dinner Sets']")
	private WebElement dinnerset;

	public WebElement getNonstick() {
		return nonstick;
	}

	public WebElement getDinnerset() {
		return dinnerset;
	}

	public WebElement getIncreasecount() {
		return increasecount;
	}

	public WebElement getQuantity() {
		return quantity;

	}



}
