---
id: properties-mapper
title: PropertiesMapper
sidebar_position: 4
---

The PropertiesMapper class provides utilities for parsing, writing, and updating property files and maps. This README
explains the functionalities provided by the class.

## Introduction

The PropertiesMapper class simplifies the handling of property files and maps in Java. It allows you to parse properties
files into entity classes or maps, write entity classes or maps to properties files, and update properties in existing
files. Additionally, it provides a convenient method to access system properties and environment variables.

## Parsing Properties Files

Parsing to Entity Class

```java
Class<MyEntity> entityClass = MyEntity.class;
MyEntity entity = PropertiesMapper.parse(entityClass);
```

Parsing to Map

```java
Path filePath = Paths.get("path/to/your/property/file.properties");
Map<String, String> propertyMap = PropertiesMapper.parse(filePath);
```

In the following example, we have a `test_config.properties` file containing some properties:

```properties title="test_config.properties"
userName=Ramesh
password=make
isTest=true
osName=${os.name}
date=${date}
helloDate=12/12/2022
selcukes.jim=50
mass=jim,jil
```

We can then use `PropertiesMapper` to map these properties to a TestConfig object:

```java
public class PropertiesMapperTest {

    @Test
    public void testProperties() {
        var testConfig = PropertiesMapper.parse(TestConfig.class);
        System.out.println(testConfig.getUserName());
        if (testConfig.isTest())
            System.out.println(testConfig.getDate());
        System.out.println(testConfig.getOsName());
        System.out.println(testConfig.getJim());
        System.out.println(testConfig.getMass());
        System.out.println(testConfig.getHelloDate());

    }

    @Interpolate(substitutor = StringSubstitutor.class)
    @DataFile
    @Data
    static class TestConfig {
        String userName;
        String password;
        boolean isTest;
        String osName;
        LocalDate date;
        @Key(name = "helloDate", format = "MM/dd/yyyy")
        LocalDate helloDate;
        @Key(name = "selcukes.jim")
        int jim;
        @Key(name = "mass", converter = ListOfStringConverter.class)
        List<String> mass;
    }

}
```

In this example, we have defined a TestConfig class with properties that match those defined in the
test_config.properties file. We have also used the @Interpolate annotation to enable property interpolation using the
StringSubstitutor class.

We can then call PropertiesMapper.parse(TestConfig.class) to parse the properties file into a TestConfig object.

Note that we have also used the @Key annotation to specify the mapping between property names and class fields. We have
also used the @DataFile annotation to indicate that the data source is a file. Finally, we have used the @Data
annotation to indicate that this is a data object that should be parsed by PropertiesMapper.

## Writing to Properties Files

Writing Entity to Properties File

```java
MyEntity entity = // create or obtain your entity
        PropertiesMapper.write(entity);
```

Writing Map to Properties File

```java
Path filePath = Paths.get("path/to/your/property/file.properties");
Map<String, String> dataMap = // create or obtain your data map
        PropertiesMapper.write(filePath, dataMap);
```
Updating Properties

```java
Path filePath = Paths.get("path/to/your/property/file.properties");
String key = "yourKey";
String value = "yourValue";
PropertiesMapper.updateProperty(filePath, key, value);
```
Accessing System Properties and Environment Variables

```java
Properties systemProperties = PropertiesMapper.systemProperties();
```

:::note
In case of errors during file parsing or writing a DataMapperException is thrown.
This exception provides information about the failure, including the underlying cause.
:::