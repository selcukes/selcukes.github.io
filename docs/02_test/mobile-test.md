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
import io.github.selcukes.core.enums.SwipeDirection;
import io.github.selcukes.core.listener.TestLifecyclePerClass;
import io.github.selcukes.core.page.MobilePage;
import io.github.selcukes.core.page.Pages;
import org.openqa.selenium.By;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;

@Listeners(TestLifecyclePerClass.class)
public class MobileAppTest {
    MobilePage page;

    @BeforeMethod
    void beforeTest() {
        page = Pages.mobilePage();
    }

    @Test(enabled = false)
    public void expandAndScrollScreenTest() {
        page.tap("Views")
                .tap("Expandable Lists")
                .tap("3. Simple Adapter")
                .swipe(By.xpath("//android.widget.TextView[@text='Group 18']"), SwipeDirection.DOWN)
                .tap(By.xpath("//android.widget.TextView[@text='Group 18']"))
                .swipe(By.xpath("//android.widget.TextView[@text='Child 13']"), SwipeDirection.DOWN)
                .swipe(By.xpath("//android.widget.TextView[@text='Group 1']"), SwipeDirection.UP);

    }
}
```