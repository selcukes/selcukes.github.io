package io.github.selcukes.tests;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import io.appium.java_client.service.local.AppiumServiceBuilder;
import io.appium.java_client.service.local.flags.GeneralServerFlag;
import io.github.selcukes.wdb.BinaryInfo;
import io.github.selcukes.wdb.WebDriverBinary;
import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Map;

public class AppiumTest {
    AppiumDriverLocalService service;

    @Test
    public void appiumTest() throws MalformedURLException {
        WebDriver driver = null;
        try {



            String browserVersion = "91.0.4472.101";
            BinaryInfo wdm = WebDriverBinary.chromeDriver()
                    .version(browserVersion).setup();
            String chromedriverPath = wdm.getBinaryPath();
            MutableCapabilities capabilities = new MutableCapabilities(Map.of(
                    "platformName", "android",
                    //"automationName", "UIAutomator2",
                    "browserName", "chrome"
                //    ,"chromedriverExecutable", chromedriverPath
            ));

            capabilities.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, "com.google.android.apps.chrome.Main");

           /* service = new AppiumServiceBuilder()
                    .withIPAddress("127.0.0.1")
                    .usingAnyFreePort()
                    .withArgument(GeneralServerFlag.SESSION_OVERRIDE)
                    .withArgument(GeneralServerFlag.BASEPATH, "/wd/")
                    .build();
            service.start();*/

            driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
            System.out.println("Initiated...................");
            driver.get("https://www.google.com/");
            Assert.assertEquals(driver.getTitle(), "Google");
        } finally {
            if (driver != null) driver.quit();
          //  service.stop();
        }

    }
}
