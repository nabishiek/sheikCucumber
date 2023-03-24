package org.base;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.time.Duration;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.interactions.Actions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Baseproject {
	public static WebDriver driver;
	public static Actions a;

	/* This method is used to launch the browse */
	public static void launchBrowser() {
		
		WebDriverManager.edgedriver().setup();
		driver = new EdgeDriver();
		

	}

	/* This method is used to launch url */
	public static void launchUrl(String url) {
		driver.get(url);

	}

	/* This method is used to enter text */
	public static void enterText(WebElement element, String text) {
		element.sendKeys(text);

	}

	/* This method is used to window maximize */
	public static void windowMaximize() {
		driver.manage().window().maximize();

	}

	/* This method is used to delete the cookies */
	public static void deleteTheCookies() {
		driver.manage().deleteAllCookies();

	}

	/* This method is used to apply wait to all elements */
	public static void applyWaitToAllElements() {
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

	}

	/* This method is used to page refresh */
	public static void pageRefresh() {
		driver.navigate().refresh();

	}

	/* This method is used to click element */
	public static void clickElement(WebElement element) {
		element.click();

	}

	/* This method is used to drag And Drop The Element */
	public static void dragAndDropTheElemenr(WebElement source, WebElement target) {
		a = new Actions(driver);
		a.dragAndDrop(source, target).perform();

	}

	/* This method is used to double Click Using Mouse */
	public static void doubleClickUsingMouse(WebElement element) {
		a = new Actions(driver);
		a.doubleClick(element).perform();

	}

	/* This method is used to get Page Title */
	public static String getPageTitle() {
		String title = driver.getTitle();
		return title;

	}

	/* This method is used to get Url Of Current Page */
	public static String getUrlOfCurrentPage() {
		String url = driver.getCurrentUrl();
		return url;

	}
	/* This method is used to select Value From Drop Down Using Text */

		/* This method is used to close browser */
	public static void closeBrowser() {
		driver.quit();

	}

	/* This method is used to close current tab */
	public static void closeCurrentTab() {
		driver.close();

	}

	/* This method is used to move to element */
	public static void moveToTheElement(WebElement element) {
		a = new Actions(driver);
		a.moveToElement(element).perform();

	}

	/* This method is used to context click */
	public static void contextClick() {
		a = new Actions(driver);
		a.contextClick().perform();

	}

	/* This method is used to dismiss Alert */
	public static void dismissAlert() {
		Alert a = driver.switchTo().alert();
		a.dismiss();
	}

	/* This method is used to accept Alert */
	public static void acceptAlert() {
		Alert a = driver.switchTo().alert();
		a.accept();
	}

	/* This method is used to send keys Alert */
	public static void passTheValueAlert(String text) {
		Alert a = driver.switchTo().alert();
		a.sendKeys(text);
	}

	/* This method is used to dismiss Alert */
	public static void getTextAlert() {
		Alert a = driver.switchTo().alert();
		String text = a.getText();
		System.out.println(text);
	}

	/* This method is used to key press and release */
	public static void keyUpAndRelease() throws AWTException {
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);

	}

	/* This method is used to takescreenshot */
	public static void takesScreenshot() throws IOException {
		TakesScreenshot tk = (TakesScreenshot) driver;
		File src = tk.getScreenshotAs(OutputType.FILE);
		File des = new File(" ");
		FileUtils.copyFile(src, des);

	}

	/* This method is used to java script send keys */
	public static void javaScriptSend(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('value',we pass)", element);
	}

	/* This method is used to java script get the value */
	public static void javaScriptReturn(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("return arguments[0].getAttribute('value')", element);
	}

	/* This method is used to scroll */
	public static void javaScriptScroll(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].ScrollIntoView()", element);
	}

	/* This method is used to java script click */
	public static void javaScriptClick(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()", element);
	}
	
	/* This method is used to check the particular webelement is displayed using assert */
	public static void checkUsingAssert(String message, WebElement element) {
		Assert.assertTrue(message, element.isDisplayed());
	}

}


