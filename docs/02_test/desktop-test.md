---
id: desktop-test
title: Desktop Test
sidebar_position: 3
---

```java
package org.example;

import io.github.selcukes.commons.annotation.Lifecycle;
import io.github.selcukes.core.page.Pages;
import io.github.selcukes.core.page.WinPage;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.testng.annotations.Test;

@Lifecycle
public class NotepadTest {

    @Test
    public void notepadTest() {

        WinPage page = Pages.winPage();
        By edit = By.className("Edit");
        page.enter(edit, "Welcome to Selcukes !!!")
                .enter(edit, Keys.ENTER)
                .enter(edit, "Time is")
                .enter(edit, Keys.ENTER)
                .enter(edit, Keys.F5)
                .enter(edit, Keys.CONTROL + "w" + Keys.CONTROL)
                .click(By.name("Don't Save"));
    }
}
```
