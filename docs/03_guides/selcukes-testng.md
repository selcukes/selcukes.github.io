---
id: selcukes-testng 
title: Selcukes TestNG 
sidebar_position: 5
---

[Selcukes TestNG](https://github.com/selcukes/selcukes-java/tree/master/selcukes-testng) is used to run cucumber testng
tests with easy runtime configurations for different modules.

## Setup

Selcukes TestNG is primarily used as a Java dependency . We typically use a _build tool_ (such
as [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/)) to resolve the Selcukes TestNG dependency.

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
    <artifactId>selcukes-testng</artifactId>
    <version>${selcukes.version}</version>
</dependency>
```

</TabItem>
<TabItem value="gradle">

```java
dependencies{
        implementation("io.github.selcukes:selcukes-testng:${selcukes.version}")
}
```

</TabItem>
</Tabs>

:::note 
Selcukes TestNG is a transitive Dependency of `selcukes-excel-runner`.If you are using `excel-runner`, then
ignore adding this dependency explicitly.
:::

## Usage

Add `selcukes.yaml` file in `src/test/resource` folder and update below cucumber options as required

```yaml
cucumber:
  module: google
  features: src/test/resources/features/${module}
  glue: io.github.selcukes.testng.tests
  tags:
  plugin:
```

Also add report options as follows

```yaml
reports:
  emailReport: true
  htmlReport: true
  reportsPath:
```

:::tip 
Here emailReport means extent reports, which will created automatically without any additional configurations.
:::
Create your own Test runner by extending `SelcukesTestNGRunner`

Add By default, all scenarios will execute in sequential. To enable scenario to run in parallel use `@parallel`
annotation to the scenarios as follows

```
@parallel
Scenario: Maker starts a game
When the Maker starts a game
Then the Maker waits for a Breaker to join
```
