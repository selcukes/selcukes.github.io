package io.github.selcukes.tests;

import io.github.selcukes.snapshot.Snapshot;
import io.github.selcukes.snapshot.SnapshotImpl;
import io.github.selcukes.wdb.WebDriverBinary;
import lombok.CustomLog;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

//tag::snippet-in-doc[]
@CustomLog
public class SnapshotTest {
    WebDriver driver;

    @BeforeClass
    static void setupClass() {
        WebDriverBinary.chromeDriver().setup();
    }

    @BeforeTest
    void setupTest() {
        driver = new ChromeDriver();
    }

    @AfterTest
    void teardown() {
        driver.quit();
    }

    @Test
    public void fullPageScreenshotTest() {
        final String url = "https://techyworks.blogspot.com/";

        String browser = driver.getClass().getSimpleName().replace("Driver", "");
        logger.info(() -> String.format("Initiated %s browser", browser));
        driver.get(url);
        logger.info(() -> "Navigated to " + url);
        Snapshot snapshot = new SnapshotImpl(driver);
        String screenshotFilePath = snapshot
                .withText("Browser: " + browser + "\nThis sample Text Message\nMake it simple Make it simple Make it simple Make it simple Make it simple")
                .shootPage();
        logger.info(() -> String.format("Captured full page screenshot for %s browser and placed at %s ",
                browser, screenshotFilePath));

    }
}
//end::snippet-in-doc[]