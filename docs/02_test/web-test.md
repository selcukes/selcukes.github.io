---
id: web-test
title: Web Test
sidebar_position: 1
---
The `WebTest.java` file is an example test class that demonstrates how to create a basic web test using Selcukes. It includes a test method called remoteWebTest() that opens the Google homepage and asserts that the page title is "Google".

The test class also includes a setup() method annotated with @BeforeMethod, which is executed before each test method. The setup() method initializes the WebPage object from the Pages utility class.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="java"
values={[
{label: 'selcukes.yaml', value: 'yaml'},{label: 'WebTest.java', value: 'java'}
]
}>

<TabItem value="yaml">

```yaml
web:
  remote: false
  cloud:
  browser: CHROME
  headLess: true
  serviceUrl: "http://127.0.0.1:4444"
  serverJar: "https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.17.0/selenium-server-4.17.0.jar"
```

</TabItem>
<TabItem value="java">

```java
package org.example;

import io.github.selcukes.commons.annotation.Lifecycle;
import io.github.selcukes.core.page.Pages;
import io.github.selcukes.core.page.WebPage;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

@Lifecycle
public class WebTest {
    WebPage page;

    @BeforeMethod
    public void setup() {
        page = Pages.webPage();
    }

    @Test
    public void sampleWebTest() {
        page.open("https://www.google.com/")
                .assertThat().title("Google");
    }

}
```

</TabItem>
</Tabs>
