---
id: mobile-test
title: Mobile Test
sidebar_position: 2
---

```java
package org.example;

import io.appium.java_client.android.Activity;
import io.appium.java_client.android.AndroidDriver;
import io.github.selcukes.commons.annotation.Lifecycle;
import io.github.selcukes.core.driver.DriverManager;
import io.github.selcukes.core.page.MobilePage;
import io.github.selcukes.core.page.Pages;
import io.github.selcukes.core.wait.WaitCondition;
import org.openqa.selenium.By;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import static io.github.selcukes.core.enums.SwipeDirection.DOWN;
import static io.github.selcukes.core.enums.SwipeDirection.UP;
import static java.lang.String.format;

@Lifecycle
public class MobileAppTest {
    MobilePage page;

    @BeforeMethod
    void beforeTest() {
        page = Pages.mobilePage();
    }

    private By textView(String text) {
        return By.xpath(format("//android.widget.TextView[@text='%s']", text));
    }

    @Test
    public void expandAndScrollScreenTest() {
        page.click("aid:Views")
                .click("aid:Expandable Lists")
                .click("aid:3. Simple Adapter")
                .swipe(textView("Group 18"), DOWN)
                .click(textView("Group 18"))
                .swipe(textView("Child 13"), DOWN)
                .swipe(textView("Group 1"), UP);

    }
}
```
