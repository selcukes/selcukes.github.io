---
id: desktop-test
title: Desktop Test
sidebar_position: 3
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="java"
values={[
{label: 'selcukes.yaml', value: 'yaml'},{label: 'NotepadTest.java', value: 'java'}
]
}>

<TabItem value="yaml">

```yaml
windows:
  remote: false
  serviceUrl: "http://127.0.0.1:4723"
  app: "C:\\Windows\\System32\\notepad.exe"
```

</TabItem>
<TabItem value="java">

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

</TabItem>
</Tabs>