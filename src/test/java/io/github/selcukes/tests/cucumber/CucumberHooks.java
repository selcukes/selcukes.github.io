package io.github.selcukes.tests.cucumber;

import io.cucumber.java.*;
import io.github.selcukes.extent.report.Reporter;
import lombok.CustomLog;
import org.openqa.selenium.WebDriver;

@CustomLog
//tag::snippet-in-doc[]
public class CucumberHooks {

    WebDriver driver;

    public CucumberHooks(WebDriver driver) {
        this.driver = driver;
    }


    @Before
    public void beforeTest(Scenario scenario) {
        Reporter.getReporter().initSnapshot(driver); //Initialise Full page screenshot
        logger.info(() -> "Starting Scenario .." + scenario.getName());
    }

    @BeforeStep
    public void beforeStep() {
        logger.info(() -> "Before Step");
    }

    @AfterStep
    public void afterStep() {
        Reporter.getReporter().attachScreenshot(); //Attach Full page screenshot
    }

    @After
    public void afterTest(Scenario scenario) {
        logger.info(() -> "Completed Scenario .." + scenario.getName());
    }
}
//end::snippet-in-doc[]