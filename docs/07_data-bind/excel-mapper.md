---
id: excel-mapper
title: ExcelMapper
sidebar_position: 3
---

ExcelMapper is a Java utility class that facilitates the parsing and writing of Excel files (.xlsx). It is designed to
parse Excel sheets into streams of entity class objects and provides methods for reading and writing DataTables to Excel
files.

## Introduction

The ExcelMapper class is designed to simplify the process of reading and writing Excel files. It provides methods for
parsing Excel sheets into streams of entity class objects and for creating DataTables from Excel sheets. Additionally,
it offers functionality to write DataTables to specified sheets in Excel files.

## Parsing Excel Files

Parsing Entity Class

```java
Class<MyEntity> entityClass = MyEntity.class;
Stream<MyEntity> entityStream = ExcelMapper.parse(entityClass);
```

Parsing Sheets into DataTables

```java
String filePath = "path/to/your/excel/file.xlsx";
Map<String, DataTable<String, String>> sheetData = ExcelMapper.parse(filePath);
```

Here is an example usage of reading an Excel sheet.

```java
public class ReadExcelTest {
    @Data
    @DataFile(fileName = "TestData.xlsx", sheetName = "Yahoo")
    static class TestData {
        @Key(name = "First Name")
        String firstName;
        @Key(name = "Last Name")
        String lastName;
        @Key(name = "DOB", format = "MM-dd-yyyy")
        LocalDate dob;
        String location;

    }

    @Test
    public void excelMapperTest() {
        Stream<TestData> dataStream = ExcelMapper.parse(TestData.class);
        dataStream.forEach(System.out::println);
    }
}
```

In the above example, We have provided Excel file name and sheet name as input in `@DataFile` annotation.

As explained in the `DataMapper` section, the fileName attribute is optional - by default, ExcelMapper will look for a
datafile name as the SnakeCase of the entity class name followed by xlsx as a suffix. The sheetName attribute is also
optional. By default, the first sheet name in the Excel file is used.

To map fields, you can use `@Key` annotation.

### Converter

ExcelMapper provides way to convert field values with custom converter.

To use custom converter, you should specify its class via `@Key` annotation.

```java

@Key(name = "Tags", converter = ListOfStringConverter.class)
private List<String> data;
```

And the actual implementation may look like the following:

```java
public class ListOfStringConverter extends DefaultConverter<List<String>> {
    @Override
    public List<String> convert(final String value) {
        return asList(value.split(","));
    }
}
```

Custom converters must extend `DefaultConverter` class.
Also note that by default `ExcelMapper` uses an implicit conversion based on the field type.
So you don't have to explicitly specify a converter if it's among the defaults.

### Substitutor

Similar to converters, `ExcelMapper` allows you to substitute field value prior to parsing an Excel sheet

Consider, we have given Excel field values as `${DATE}` in Excel file. On the fly, this field value will be converted to
the current date and ensure the value assigned to the respective field.

This can be achieved with the help of `@Interpolate` annotation.

ExcelMapper allows you to use custom substitutor.

```java
public class FakerDataSubstitutor extends DefaultSubstitutor {
    @Override
    public String replace(String strToReplace, final String format) {

        return FakerUtils.substitute(strToReplace);
    }
}
```

```java
public class ReadExcelTest {
    @Interpolate(substitutor = FakerDataSubstitutor.class)
    @Data
    @DataFile(fileName = "TestData.xlsx", sheetName = "Yahoo")
    static class TestData {
        @Key(name = "First Name")
        String firstName;
        @Key(name = "Last Name")
        String lastName;
        @Key(name = "DOB", format = "MM-dd-yyyy")
        LocalDate dob;
        String location;

    }

    @Test
    public void interpolateExcelMapperTest() {
        Stream<TestData> dataStream = ExcelMapper.parse(TestData.class);
        dataStream.forEach(System.out::println);
    }
}
```

## Writing to Excel Files

```java
 @Test
public void excelWrite() {
    DataTable<String, Object> input = DataTable.of(
            new LinkedHashMap<>(Map.of("ID", 1, "Name", "John Doe", "Age", 30, "IsEmployed", false)),
            new LinkedHashMap<>(Map.of("ID", 2, "Name", "Jane Smith", "Age", 40, "IsEmployed", false)),
            new LinkedHashMap<>(Map.of("ID", 3, "Name", "Tom", "Age", 35, "IsEmployed", false)));

    String filePath = Resources.ofTest("output.xlsx").toString();
    String sheetName = "Sheet1";
    ExcelMapper.write(input, filePath, sheetName);
}
```
:::note
In case of errors during file parsing or writing, a DataMapperException is thrown. This exception provides information
about the failure, including the underlying cause.
:::