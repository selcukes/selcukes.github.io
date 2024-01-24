---
id: csv-mapper
title: CsvMapper
sidebar_position: 5
---

CsvMapper is a Java utility class that provides methods for parsing and writing CSV (Comma-Separated Values) files using
a specified regex. It utilizes the Selcukes collections library to streamline the data processing.

## Introduction

The CsvMapper class is designed to simplify the reading and writing of CSV files. It offers methods to parse a CSV file
into a `DataTable` and to write DataTable or CSV data to a CSV file. The default CSV parsing regex is
provided, and you can also specify a custom regex if needed.

## Parsing CSV Files

Method 1: Using Default Regex

```java
Path filePath = Paths.get("path/to/your/file.csv");
DataTable<String, String> dataTable = CsvMapper.parse(filePath);
```

Method 2: Using Custom Regex

```java
Path filePath = Paths.get("path/to/file.csv");
DataTable<String, String> dataTable = CsvMapper.parse(filePath, CsvMapper.CSV_REGEX);
```

## Writing to CSV Files

Method 1: Writing DataTable to CSV File

```java
Path filePath = Paths.get("path/to/your/output.csv");
DataTable<String, String> dataTable = CsvMapper.write(filePath, dataTable); // create or obtain your DataTable
```

Method 2: Writing CSV Data to File

```java
Path filePath = Paths.get("path/to/your/output.csv");
String csvData = CsvMapper.write(filePath, csvData); // create or obtain your CSV data as a string
```

:::note
In case of errors during file parsing or writing, a DataMapperException is thrown. This exception provides information
about the failure, including the underlying cause.
:::