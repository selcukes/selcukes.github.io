---
id: data-comparator
title: DataComparator
sidebar_position: 02
---

The DataComparator class is a versatile utility designed for efficient comparison of tables, rows, and column data,
aiding in the identification of discrepancies between expected and actual datasets.

The comparison results are captured and organized within a DataTable class. The DataTable class provides convenient
methods like `prettyTable()` or `prettyHtmlTable()` to facilitate enhanced reporting.

Here's an example of how to print the comparison results table:

## Comparing Two Tables

Let's examine the following example with two data tables:

```java
DataTable<String, String> expected = DataTable.of(
        Map.of("id", "1", "Name", "Alice", "Amount", "120,000.00", "Type", "Credit"),
        Map.of("id", "2", "Name", "BOB", "Amount", "132,855.97", "Type", "Debit"),
        Map.of("id", "3", "Name", "Charlie", "Amount", "132,855.97", "Type", "Error1"),
        Map.of("id", "4", "Name", "Dave", "Amount", "19,945,711.94", "Type", "Credit"));
DataTable<String, String> actual = DataTable.of(
        Map.of("id", "1", "Name", "Alice", "Amount", "120,000.00", "Type", "Credit"),
        Map.of("id", "2", "Name", "Bob", "Amount", "132,855.97", "Type", "Debit"),
        Map.of("id", "3", "Name", "Charlie", "Amount", "132,855.97", "Type", "Error"),
        Map.of("id", "4", "Name", "Dave", "Amount", "19,945,711.94", "Type", "Credit"));
```

To compare the tables using the foreign key "id":

```java
DataTable<String, String> differences = DataComparator.create().diff(expected, actual, "id");
```

To print the comparison results table:

```java
System.out.println(differences.prettyTable());
```

The output will be:

```shell
+--------+---------------+---------------+--------+
| Field  | Expected      | Actual        | Status |
+--------+---------------+---------------+--------+
| Type   | Credit        | Credit        | Pass   |
| Amount | 120,000.00    | 120,000.00    | Pass   |
| Name   | Alice         | Alice         | Pass   |
| id     | 1             | 1             | Pass   |
| Type   | Debit         | Debit         | Pass   |
| Amount | 132,855.97    | 132,855.97    | Pass   |
| Name   | BOB           | Bob           | Fail   |
| id     | 2             | 2             | Pass   |
| Type   | Error1        | Error         | Fail   |
| Amount | 132,855.97    | 132,855.97    | Pass   |
| Name   | Charlie       | Charlie       | Pass   |
| id     | 3             | 3             | Pass   |
| Type   | Credit        | Credit        | Pass   |
| Amount | 19,945,711.94 | 19,945,711.94 | Pass   |
| Name   | Dave          | Dave          | Pass   |
| id     | 4             | 4             | Pass   |
+--------+---------------+---------------+--------+
```

This comprehensive display of differences streamlines the identification and resolution of discrepancies, enhancing the
overall data validation process.

## Custom Value Comparator

The `DataComparator` class provides flexibility by supporting custom comparison logic, enabling you to tailor
comparisons based on specific
criteria. This includes options such as case-insensitive comparisons or other custom-defined criteria.

Below is an illustrative example in a test scenario utilizing a custom value comparator

```java
var comparator = DataComparator.create(
        (expectedValue, actualValue) -> expectedValue.toString().equalsIgnoreCase(actualValue.toString()));
```

In the above snippet, a DataComparator instance is crafted to disregard case sensitivity during comparisons.

```java
DataTable<String, String> differences = comparator.diff(expected, actual, "id");
```

To print the comparison results table:

```java
System.out.println(differences.prettyTable());
```

The output will be:

```shell
+--------+---------------+---------------+--------+
| Field  | Expected      | Actual        | Status |
+--------+---------------+---------------+--------+
| Type   | Credit        | Credit        | Pass   |
| Amount | 120,000.00    | 120,000.00    | Pass   |
| Name   | Alice         | Alice         | Pass   |
| id     | 1             | 1             | Pass   |
| Type   | Debit         | Debit         | Pass   |
| Amount | 132,855.97    | 132,855.97    | Pass   |
| Name   | BOB           | Bob           | Pass   |
| id     | 2             | 2             | Pass   |
| Type   | Error1        | Error         | Fail   |
| Amount | 132,855.97    | 132,855.97    | Pass   |
| Name   | Charlie       | Charlie       | Pass   |
| id     | 3             | 3             | Pass   |
| Type   | Credit        | Credit        | Pass   |
| Amount | 19,945,711.94 | 19,945,711.94 | Pass   |
| Name   | Dave          | Dave          | Pass   |
| id     | 4             | 4             | Pass   |
+--------+---------------+---------------+--------+
```

Note the entry marked with "Pass":

```java
|Name   |BOB           |Bob           |Pass   |
```

This effectively demonstrates the successful comparison while considering the specified custom criteria, in this
instance, ignoring case sensitivity.

## Comparing two rows

Comparing two rows follows a similar process to comparing two tables. Here's an example to demonstrate the comparison of
two rows:

```java

@Test
public void testCheckRowData() {
    var expectedRow = Map.of("id", "1", "Name", "Alice", "Amount", "120,000.00", "Type", "Credit");
    var actualRow = Map.of("id", "1", "Name", "Bob", "Amount", "120,000.00", "Type", "Credit");

    var differences = DataComparator.create().diff(expectedRow, actualRow);
    assertTrue(isFailed(differences));
    System.out.println(differences.prettyTable());
}
```

Output will be:

```shell
+--------+------------+------------+--------+
| Field  | Expected   | Actual     | Status |
+--------+------------+------------+--------+
| Name   | Alice      | Bob        | Fail   |
| id     | 1          | 1          | Pass   |
| Type   | Credit     | Credit     | Pass   |
| Amount | 120,000.00 | 120,000.00 | Pass   |
+--------+------------+------------+--------+
```

## Comparing two column entries

To compare entries in two columns, you can utilize the DataComparator class as demonstrated in the following example:

```java

@Test
public void testCheckColumnData() {
    var expectedColumn = expected.getColumnEntries("Name");
    var actualColumn = actual.getColumnEntries("Name");

    var differences = DataComparator.create().diff(expectedColumn, actualColumn);
    System.out.println(differences.prettyTable());
}
```

Output will be:

```shell
+-------+----------+---------+--------+
| Field | Expected | Actual  | Status |
+-------+----------+---------+--------+
| Row 0 | Alice    | Alice   | Pass   |
| Row 1 | Bob      | Bob     | Pass   |
| Row 2 | Charlie  | Charlie | Pass   |
| Row 3 | Dave     | Dave    | Pass   |
+-------+----------+---------+--------+
```

In this example, the test compares entries in the "Name" column between the expected and actual datasets. The resulting
table provides a clear overview of the comparison, indicating the status of each entry. In this specific case, all
entries match, as evidenced by the "Pass" status. This detailed table assists in efficiently validating and confirming
the consistency of column data.
