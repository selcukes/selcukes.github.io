---
id: web-test
title: Web Test
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="java"
values={[
{label: 'WebTest.java', value: 'java'}, {label: 'pom.xml', value: 'pom'}
]
}>

<TabItem value="java">

```java
package org.example;

import io.github.selcukes.core.driver.DriverManager;
import io.github.selcukes.core.enums.DeviceType;
import io.github.selcukes.core.page.WebPage;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.Test;
import org.testng.annotations.BeforeTest;

public class WebTest {

    @BeforeTest
    public void beforeSuite() {
        GridRunner.startSelenium(DriverType.CHROME);
    }

    @Test
    public void remoteTest() {
        WebDriver driver = DriverManager.createDriver(DeviceType.BROWSER);
        WebPage page = new WebPage(driver);
        page.open("https://www.google.com/")
            .assertThat().title("Google");
    }

    @AfterTest
    public void afterTest() {
        DriverManager.removeDriver();
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
        <selcukes.version>2.1.0</selcukes.version>
        <lombok.version>1.18.24</lombok.version>
        <slfj4.version>2.17.2</slfj4.version>

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
