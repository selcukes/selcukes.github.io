---
id: mobile-test
title: Mobile Test
sidebar_position: 2
---

```java
package org.example;

import io.appium.java_client.android.Activity;
import io.appium.java_client.android.AndroidDriver;
import io.github.selcukes.core.driver.DriverManager;
import io.github.selcukes.core.driver.GridRunner;
import io.github.selcukes.core.enums.DeviceType;
import io.github.selcukes.core.enums.SwipeDirection;
import io.github.selcukes.core.page.MobilePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;


public class MobileTest {
    MobilePage page;

    @BeforeMethod
    void beforeTest() {
        GridRunner.startAppium();
        WebDriver driver = DriverManager.createDriver(DeviceType.MOBILE);
        page = new MobilePage(driver);

    }

    @Test
    public void expandAndScrollScreenTest() {
        page.tap("Views")
                .tap("Expandable Lists")
                .tap("3. Simple Adapter")
                .swipe(By.xpath("//android.widget.TextView[@text='Group 18']"), SwipeDirection.DOWN)
                .tap(By.xpath("//android.widget.TextView[@text='Group 18']"))
                .swipe(By.xpath("//android.widget.TextView[@text='Child 13']"), SwipeDirection.DOWN)
                .swipe(By.xpath("//android.widget.TextView[@text='Group 1']"), SwipeDirection.UP);

    }

    @AfterMethod
    void afterTest() {
        DriverManager.removeDriver();
        GridRunner.stopAppium();
    }
}
```