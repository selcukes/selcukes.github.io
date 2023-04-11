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
{label: 'selcukes.yaml', value: 'yaml'},{label: 'WebTest.java', value: 'java'}, {label: 'pom.xml', value: 'pom'}
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
```

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
    public void remoteWebTest() {
        page.open("https://www.google.com/")
                .assertThat().title("Google");
    }

}
```

</TabItem>
<TabItem value="pom">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>examples</artifactId>
    <version>0.1-SNAPSHOT</version>
    <name>Selcukes Java Examples</name>
    <properties>
        <selcukes.version>LATEST</selcukes.version>
        <lombok.version>LATEST</lombok.version>
        <slfj4.version>LATEST</slfj4.version>

        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
    </properties>
    <dependencies>
        <dependency>
            <groupId>io.github.selcukes</groupId>
            <artifactId>selcukes-java</artifactId>
            <version>${selcukes.version}</version>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>${lombok.version}</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-slf4j-impl</artifactId>
            <version>${slfj4.version}</version>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
</Tabs>
