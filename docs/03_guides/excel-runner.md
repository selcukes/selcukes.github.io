---
id: excel-runner
title: Selcukes Excel Runner
sidebar_position: 5
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
To be updated...