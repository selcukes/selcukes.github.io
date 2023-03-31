---
id: extent-reports
title: Extent Reports
sidebar_position: 2
---

[Selcukes Extent Reports](https://github.com/selcukes/selcukes-java/tree/master/selcukes-extent-reports) is used to
generate Extent reports for Cucumber JVM.

## Features

1. Generates Emailable extent report
2. Full page screenshots attached to report as base64 format
3. Supports to add JUL based info logs to report

## Setup

Selcukes Extent Reports is primarily used as a Java dependency . We typically use a _build tool_ (such
as [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/)) to resolve the Selcukes Extent Reports
dependency.

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs defaultValue="maven"
values={[
{label: 'Maven', value: 'maven'},{label: 'Gradle', value: 'gradle'}
]
}>

<TabItem value="maven">

```xml

<dependency>
    <groupId>io.github.selcukes</groupId>
    <artifactId>selcukes-extent-reports</artifactId>
    <version>${selcukes.version}</version>
</dependency>
```

</TabItem>
<TabItem value="gradle">

```java
dependencies{
        implementation("io.github.selcukes:selcukes-extent-reports:${selcukes.version}")
}
```

</TabItem>
</Tabs>

:::note 
Selcukes Extent Reports is a transitive Dependency of `selcukes-reports`.If you are using `selcukes-reports`,
then ignore adding this dependency explicitly.
:::

:::warning 
If you are using `selcukes-testng` then  set `emailReport` as true in `selcukes.yaml` file. No other configurations required
:::

## Usage

Create `extent.properties` file in `src/test/resources` folder

```shell
extent.reporter.spark.start=true
extent.reporter.spark.out=target/extent-reports/Sample.html
systeminfo.Author=Ramesh
selcukes.reports.timestamp=false
selcukes.reports.thumbnail=false
```

Add Selcukes Extent Reports plugin to cucumber runner as follows

```java
@CucumberOptions(tags = "@tag1", plugin = {
        "io.github.selcukes.extent.report.SelcukesExtentAdapter",
        "html:target/cucumber-reports/cucumber.html", "json:target/cucumber-reports/cucumber.json"

})
```
Update Cucuckber Hooks 
```java
package io.github.selcukes.example.cucumber.steps;

import io.cucumber.java.After;
import io.cucumber.java.AfterAll;
import io.cucumber.java.AfterStep;
import io.cucumber.java.Before;
import io.cucumber.java.BeforeAll;
import io.cucumber.java.BeforeStep;
import io.cucumber.java.Scenario;
import io.github.selcukes.example.cucumber.utils.TestContext;
import io.github.selcukes.excel.ScenarioContext;
import io.github.selcukes.extent.report.Reporter;
import lombok.CustomLog;
import org.openqa.selenium.WebDriver;

@CustomLog
public class CucumberHooks {
	WebDriver driver;

	public CucumberHooks(TestContext driverManager) {
		driver = driverManager.getDriver();
	}

	@BeforeAll
	public static void beforeAll() {
		logger.info(() -> "Before All ...");
	}

	@AfterAll
	public static void afterAll() {
		logger.info(() -> "After All ...");
	}

	@Before
	public void beforeTest(Scenario scenario) {
		ScenarioContext.setTestName(scenario);
		Reporter.getReporter().initSnapshot(driver);
		logger.info(() -> "Starting Scenario .." + scenario.getName());
	}

	@BeforeStep
	public void beforeStep(Scenario scenario) {
		logger.info(() -> "Before Step");
	}

	@AfterStep
	public void afterStep(Scenario scenario) {
		logger.info(() -> "After Step");

		try {
			Reporter.getReporter().attachVisiblePageScreenshot();
		} catch (Exception ignored) {
		}
	}

	@After
	public void afterTest(Scenario scenario) {
		ScenarioContext.removeTestName();
		logger.info(() -> "Completed Scenario .." + scenario.getName());
	}
}
```
The above CucumberHooks class will take care of extent report integration

:::note 
Use Selcukes Logger to attach custom info logs to extent report
:::
