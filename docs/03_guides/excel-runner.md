---
id: excel-runner
title: Selcukes Excel Runner
sidebar_position: 4
---

[Selcukes Excel Runner](https://github.com/selcukes/selcukes-java/tree/master/selcukes-excel-runner) is an Excel driven cucumber runner which helps to

1. Execute cucumber scenarios in required order
2. Execute only specific examples in a Scenario Outline

## Setup

Selcukes Excel Runner is primarily used as a Java dependency . We typically use a _build tool_ (such
as [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/)) to resolve the Selcukes Excel Runner dependency.

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
    <artifactId>selcukes-excel-runner</artifactId>
    <version>${selcukes.version}</version>
</dependency>
```

</TabItem>
<TabItem value="gradle">

```java
dependencies{
        implementation("io.github.selcukes:selcukes-excel-runner:${selcukes.version}")
        }
```

</TabItem>
</Tabs>

## Usage
ExcelTestRunner supports both single-excel-file and multi-excel file.
### Single Excel File Tests
Single Excel file tests hold both suite details and testdata details in same excel file.
To run cucumber tests from a single Excel file, you will need to create a "Test Suite" sheet, that will contain the following information:

* Screen: The name of the screen
* Feature: The name of the feature that the test belongs to.
* Test: The name of the test or Scenario.
* Run: Indicates that the test should be run.

And Have the separate sheets for each screen will contain the following mandatory column:

* Test: The name of the test or Scenario.
* Example: The cucumber example.
* Run: Indicates that the test should be run.

In additions to above three column, you have your screen specific field column.

Here is exmple of Single excel file test [TestData.xlsx](https://github.com/selcukes/selcukes-java/blob/main/selcukes-excel-runner/src/test/resources/TestData.xlsx)

### Multi Excel File Tests
To run cucumber tests from multiple Excel files, you will need to create a "TestSuite.xlsx" file with multiple test suite sheets like Regression, Smoke, etc. Each test suite sheet will contain the following information:

* Screen: The name of the screen
* Feature: The name of the feature that the test belongs to.
* Test: The name of the test or Scenario.
* Run: Indicates that the test should be run.
* DataFile: The path to the file that contains the respective screen test data.

The `DataFile` column is new in multi-excel file concept. It specifies the path to the file that contains the test data for the respective screen. The test data is similar to single-excel file test approach, only thing here, each screen has dedicated excel file instead of sheet.

Here is exmple of Multi excel file Tests
* Suite file [TestSuite.xlsx](https://github.com/selcukes/selcukes-java/blob/main/selcukes-excel-runner/src/test/resources/TestSuite.xlsx)
* Google screen file [Google.xlsx](https://github.com/selcukes/selcukes-java/blob/main/selcukes-excel-runner/src/test/resources/Google.xlsx)
