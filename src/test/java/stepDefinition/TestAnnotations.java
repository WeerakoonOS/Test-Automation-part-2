package stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.ArrayList;
import java.util.List;

public class TestAnnotations {

    static WebDriver obj;
    private int housesWithThreeBeds;
    @Given("^I am open the ikman website$")
    public void i_am_open_the_ikman_website(){
        System.setProperty("webdriver.chrome.driver", "F:\\chromedriver_win32 (4)\\chromedriver.exe");
         obj = new ChromeDriver();
        obj.get("https://ikman.lk/");

    }

    @When("^I click on the property link$")
    public void i_click_on_the_property_link() throws Throwable{
        obj.findElement(By.cssSelector("body > div.app-content > div.home-top > div > div.home-focus > div > div:nth-child(1) > div:nth-child(2) > a > span:nth-child(2)")).click();

    }

    @When("^I click on House link$")
    public void i_click_on_House_link() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        obj.findElement(By.cssSelector("body > div.app-content > div > div.serp-listing > div.ui-panel.is-rounded.serp-panel > div.ui-panel-content.ui-panel-block > div:nth-child(1) > div.col-12.lg-3.lg-filter-area > div > div > form > div > div:nth-child(3) > div > ul > li > ul:nth-child(2) > li > ul > li.ui-link-tree-item.cat-411 > a > span")).click();

    }

    @When("^I click on colombo link$")
    public void i_click_on_colombo_link() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        obj.findElement(By.cssSelector("body > div.app-content > div > div.serp-listing > div.ui-panel.is-rounded.serp-panel > div.ui-panel-content.ui-panel-block > div:nth-child(1) > div.col-12.lg-3.lg-filter-area > div > div > form > div > div:nth-child(4) > div > ul > li > ul > li.ui-link-tree-item.loc-1506 > a > span")).click();

    }

    @When("^I click on Price link$")
    public void i_click_on_Price_link() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        obj.findElement(By.cssSelector("body > div.app-content > div > div.serp-listing > div.ui-panel.is-rounded.serp-panel > div.ui-panel-content.ui-panel-block > div:nth-child(1) > div.col-12.lg-3.lg-filter-area > div > div > form > div > div.ui-accordion-item.filter-price > a > span")).click();

    }

    @When("^I can Select min as \"([^\"]*)\" and max as \"([^\"]*)\"$")
    public void i_can_Select_min_as_and_max_as(String min, String max) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        obj.findElement(By.cssSelector("#filters\\5b 0\\5d \\5b minimum\\5d")).sendKeys(min);
        obj.findElement(By.cssSelector("#filters\\5b 0\\5d \\5b maximum\\5d")).sendKeys(max);

    }

    @When("^I click Apply Button$")
    public void i_click_Apply_Button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        obj.findElement(By.cssSelector("body > div.app-content > div > div.serp-listing > div.ui-panel.is-rounded.serp-panel > div.ui-panel-content.ui-panel-block > div:nth-child(1) > div.col-12.lg-3.lg-filter-area > div > div > form > div > div.ui-accordion-item.filter-price.is-open > div > div:nth-child(6) > div > div > button")).click();

    }

    @When("^I click on Beds link$")
    public void i_click_on_Beds_link() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        obj.findElement(By.cssSelector("body > div.app-content > div > div.serp-listing > div.ui-panel.is-rounded.serp-panel > div.ui-panel-content.ui-panel-block > div:nth-child(1) > div.col-12.lg-3.lg-filter-area > div > div > form > div > div.ui-accordion-item.filter-enum.filter-bedrooms > a > span")).click();

    }

    @When("^I Select the number of Beds$")
    public void i_Select_the_number_of_Beds() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        obj.findElement(By.cssSelector("#filters2values-3")).click();

    }

    @Then("^Get the number of Ads count and print it as No of Ads Found$")
    public void get_the_number_of_Ads_count_and_print_it_as_No_of_Ads_Found() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        housesWithThreeBeds = Integer.parseInt(obj.findElement(By.cssSelector("body > div.app-content > div > div.serp-listing > div.ui-panel.is-rounded.serp-panel > div.ui-panel-content.ui-panel-block > div:nth-child(1) > div.col-12.lg-3.lg-filter-area > div > div > form > div > div.ui-accordion-item.filter-enum.filter-bedrooms.is-open > div > ul > li.ui-link-tree-item.bedrooms-3 > a > span")).getText());
        System.out.println("number of beds ads found " + housesWithThreeBeds);

    }

    @Then("^Get the Price of the No of Ads found and print them all$")
    public void get_the_Price_of_the_No_of_Ads_found_and_print_them_all() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        List<String> priceOfTheHouses = new ArrayList<String>();

        //iterate through all the pages
        for (int i = 0; i < housesWithThreeBeds / 25 + 1; i++) {

            //put the results to an array

            WebElement serpItems = obj.findElement(By.cssSelector("body > div.app-content > div > div.serp-listing > div.ui-panel.is-rounded.serp-panel > div.ui-panel-content.ui-panel-block > div:nth-child(1) > div.col-12.lg-9 > div > div > div.row.lg-g > div.col-12.lg-9 > div"));
            List<WebElement> listItems = serpItems.findElements(By.className("ui-item"));
            List<String> numBeds = new ArrayList<String>();
            for (WebElement item : listItems) {
                priceOfTheHouses.add(item.findElement(By.className("item-info")).getText());
                numBeds.add(item.findElement(By.className("item-meta")).getText());

            }

            if (i != housesWithThreeBeds / 25) {
                obj.findElement(By.cssSelector("body > div.app-content > div > div.serp-listing > div.ui-panel.is-rounded.serp-panel > div.ui-panel-content.ui-panel-block > div.row.lg-g > div > div > div > div > div > a.col-6.lg-3.pag-next")).click();
                obj.quit();
            }
            for (int l = 0; l < priceOfTheHouses.size(); l++) {
                System.out.println("Ad Number " + (l + 1) + " price is:" + priceOfTheHouses.get(l));
            }

            //validate prices (if the prices are lay in given range
            for(int k = 0;k<priceOfTheHouses.size();k++) {
                int price = Integer.parseInt(priceOfTheHouses.get(k).replace("Rs ","").replace(",",""));
                if(price>=5000000 && price<=7500000){
                    System.out.println("price is in selected range");
                }
                else{
                    System.out.println("price is not in selected range");
                }
            }
            // validate Number of Beds
            for(int m = 0;m<numBeds.size();m++){
                int bed =  Integer.parseInt(numBeds.get(m).substring(6,7));
                if(bed == 3){
                    System.out.println("Beds are in selected range");
                }
                else{
                    System.out.println("Beds are not in selected range");
                }
            }
        }
    }
}

