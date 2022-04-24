package io.github.selcukes.tests.cucumber;

import io.cucumber.java.*;
import lombok.CustomLog;
import org.openqa.selenium.WebDriver;

import static io.github.selcukes.extent.report.Reporter.getReport;

@CustomLog
//tag::snippet-in-doc[]
public class CucumberHooks {

    WebDriver driver;

    public CucumberHooks(WebDriver driver) {
        this.driver = driver;
    }

    @Before
    public void beforeTest(Scenario scenario) {
        getReport().start() //Initialise Extent Report and start recording logRecord
                .initSnapshot(driver); //Initialise Full page screenshot
        logger.info(() -> "Starting Scenario .." + scenario.getName());
        getReport().attachAndRestart(); // Attach INFO logs and restart logRecord

    }

    @BeforeStep
    public void beforeStep() {
        logger.info(() -> "Before Step");
        getReport().attachAndRestart(); // Attach INFO logs and restart logRecord
    }

    @AfterStep
    public void afterStep() {
        getReport().attachAndRestart(); // Attach INFO logs and restart logRecord
        getReport().attachScreenshot(); //Attach Full page screenshot

    }

    @After
    public void afterTest(Scenario scenario) {
        logger.info(() -> "Completed Scenario .." + scenario.getName());
        getReport().attachAndClear(); // Attach INFO logs and clear logRecord
    }
}
//end::snippet-in-doc[]