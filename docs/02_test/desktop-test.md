---
id: desktop-test
title: Desktop Test
sidebar_position: 3
---

```java
package org.example;

import io.appium.java_client.windows.WindowsDriver;
import io.github.selcukes.core.driver.DriverManager;
import io.github.selcukes.core.driver.GridRunner;
import io.github.selcukes.core.enums.DeviceType;
import io.github.selcukes.core.page.WinPage;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class NotepadTest {

    @BeforeTest
    public void beforeTest() {
        GridRunner.startAppium();
    }

    @Test
    public void notepadTest() {
        WindowsDriver driver = DriverManager.createDriver(DeviceType.DESKTOP);
        WinPage page = new WinPage(driver);
        By edit = By.className("Edit");
        page.enter(edit, "Welcome to Selcukes !!!")
                .enter(edit, Keys.ENTER)
                .enter(edit, "Time is")
                .enter(edit, Keys.ENTER)
                .enter(edit, Keys.F5)
                .enter(edit, Keys.CONTROL + "w" + Keys.CONTROL)
                .click(By.name("Don't Save"));
    }

    @AfterTest
    public void afterTest() {
        DriverManager.removeDriver();
        GridRunner.stopAppium();
    }
}
```