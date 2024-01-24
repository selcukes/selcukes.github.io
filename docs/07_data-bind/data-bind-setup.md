---
id: data-bind-setup
title: Introduction
sidebar_position: 1
---

[Selcukes DataBind](https://github.com/selcukes/selcukes-java/tree/master/selcukes-databind) helps to parser JSON, YML,
XML, CSV, Properties and Excel files.

## Setup

Selcukes Databind is primarily used as a Java dependency.
We typically use a _build tool_ (such as [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/))
to resolve the Selcukes Databind dependency.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="maven"
values={[
{label: 'Maven', value: 'maven'},{label: 'Gradle', value: 'gradle'}
]
}>

<TabItem value="maven">

```xml

<dependency>
    <groupId>io.github.selcukes</groupId>
    <artifactId>selcukes-databind</artifactId>
    <version>${selcukes.version}</version>
</dependency>
```

</TabItem>
<TabItem value="gradle">

```java
dependencies {
    implementation("io.github.selcukes:selcukes-databind:${selcukes.version}")
}
```

</TabItem>
</Tabs>

:::note
Selcukes DataBind is a transitive Dependency of `selcukes-commons`.If you are using `selcukes-commons`, then
ignore adding this dependency explicitly.
:::

