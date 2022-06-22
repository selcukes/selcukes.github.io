---
id: data-bind
title: Selcukes Databind
sidebar_position: 2
---

[Selcukes DataBind](https://github.com/selcukes/selcukes-java/tree/master/selcukes-databind) helps to parse Json and Yml files

## Setup

Selcukes Databind is primarily used as a Java dependency . We typically use a _build tool_ (such
as [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/)) to resolve the Selcukes Databind dependency.

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
dependencies{
        implementation("io.github.selcukes:selcukes-databind:${selcukes.version}")
}
```
</TabItem>
</Tabs>

:::note
Selcukes DataBind is a transitive Dependency of `webdriver-binaries`.If you are using `webdriver-binaries`, then ignore adding this dependency explicitly.
:::

## Data Mapper

DataMapper object helps to read and write Json or yaml/yml files with `@DataFile` annotation.

### Resolution Algorithm

DataMapper looks for matching data files in test resource folder by converting POJO class name to a SnakeCase json or yaml/yml file.

- For POJO class `TestUsers.java`
- Matching test data files are `test_users.json` or `test_users.yml` or `test_users.yaml`

`@DataFile` annotation also takes additional attributes as follows

- fileName : Specify custom data file like 'mydata.json'
- filePath : path where data file is located. 'src/main/resources'
- rootFolder : root directory