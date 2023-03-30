---
id: extent-reports
title: Extent Reports
sidebar_position: 3
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
