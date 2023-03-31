---
id: collections 
title: Selcukes Collections
sidebar_position: 11
---

## DataTable
The `DataTable` class is a generic data table that stores data in rows and columns. It is implemented as a list of maps where each map represents a row in the table, and the keys of the maps represent the column names

### Creating a DataTable
To create an instance of `DataTable`, you can use the following code:
```java
DataTable<String, String> dataTable = new DataTable<>();
```
### Adding a Column

To add a new column to the table with the given key and defaultValue, use the `addColumn` method:

```java
dataTable.addColumn("Key", "Value");
```
Suppose we have a `DataTable` with the following data:
```java
DataTable<Integer, Integer> dataTable = DataTable.of(
Map.of("category", 1, "price", 10),
Map.of("category", 2, "price", 20),
Map.of("category", 1, "price", 30),
Map.of("category", 2, "price", 40));
```
To add Column `Code` with default `1234` then  we can use the addColumn() method as follows:
```java
dataTable.addColumn("Code", 1234);
```
The above method inserts a new column `Code` adds default value `1234` for all 4 rows.

### Adding Rows
To add a new row to the data table, use the `addRow` method:
```java
Map<String, String> row = Map.of("Key1", "Value1","Key2", "Value2");
dataTable.addRow(row);
```
You can also add multiple rows at once using the `addRows` method:

```java
List<Map<String, String>> rows = List.of(
Map.of("Key1", "Value1","Key2", "Value2"),
Map.of("Key3", "Value3","Key4", "Value4"));

dataTable.addRows(rows);

```
### Retrieving Column Keys

To retrieve a list of column keys from the first row of the data table, use the `getColumns` method:

```java
List<String> columns = dataTable.getColumns();
```
### Filtering Rows
To filter the rows of the DataTable based on a predicate, use the `filter` method:

```java
Stream<Map<String, String>> filteredRows = dataTable.filter(row -> row.get("Key1").equals("Value1"));
```
### Finding Rows

To find the first or last row that matches a predicate, use the `findFirst` and `findLast` methods:

```java
Optional<Map<String, String>> firstMatch = dataTable.findFirst(row -> row.get("Key1").equals("Value1"));
Optional<Map<String, String>> lastMatch = dataTable.findLast(row -> row.get("Key1").equals("Value1"));
```
### Grouping Rows
To group the rows of the DataTable based on the values of a column key, use the `groupByColumn` method:

```java
Map<String, DataTable<String, String>> groupedRows = dataTable.groupByColumn("Key1");
```
### Updating Rows
To update each row in the table by applying a function to the map representing each row, use the `updateRows` method:
```java
dataTable.updateRows(row -> {
        row.put("Key3", "Value3");
        return row;
        });
```
### Join
Suppose we have two `DataTables`, table1 and table2, with the following data:
```java
DataTable<Integer, String> table1 = DataTable.of(
Map.of("name", "Alice", "age", 25),
Map.of("name", "Bob", "age", 30),
Map.of("name", "Charlie", "age", 35));

DataTable<Integer, String> table2 = DataTable.of(
Map.of("gender", "F"),
Map.of("gender", "M"),
Map.of("gender", "M"));
```
To join the two tables on the "id" column and add the "gender" column from table2 to table1, we can use the `join` method as follows:
```java
DataTable<Integer, Map<String, Object>> joinedTable = table1.join(table2, "id", (row1, row2) -> {
        Map<String, Object> result = new HashMap<>(row1);
        result.put("gender", row2.get("gender"));
        return result;
        });
```
This will produce a new DataTable with the following data:
```css
{
  1: {name=Alice, age=25, gender=F},
  2: {name=Bob, age=30, gender=M},
  3: {name=Charlie, age=35, gender=M}
}
```

### AggregateByColumn
Suppose we have a `DataTable` with the following data:
```java
DataTable<Integer, Integer> dataTable = DataTable.of(
Map.of("category", 1, "price", 10),
Map.of("category", 2, "price", 20),
Map.of("category", 1, "price", 30),
Map.of("category", 2, "price", 40));
```
To aggregate the "price" column by the "category" column using the sum() function, we can use the aggregateByColumn() method as follows:
```java
Map<Integer, Integer> result = dataTable.aggregateByColumn("price", "category", Integer::sum);
```
This will produce a Map with the following data:
```css
{
  1: 40,
  2: 60
}
```

### SortByColumn
The sortByColumn method allows you to sort the rows in the DataTable by the values in a particular column. You specify which column to sort by using the columnName parameter, which should be the name of the column you want to sort by. You also specify a Comparator object to determine the order of the values in the column.

For example, suppose you have a DataTable object that contains information about students, including their names and grades on an exam. You could sort the table by grade using the sortByColumn method like this:
```java
DataTable<String, Integer> studentTable = new DataTable<>();
// ... populate the table with student data ...

// Define a comparator to sort by grade in descending order
Comparator<Integer> descendingOrder = Comparator.reverseOrder();

// Sort the table by grade
studentTable.sortByColumn("Grade", descendingOrder);
```
In this example, the columnName parameter is "Grade", indicating that we want to sort by the "Grade" column, and the comparator parameter is descendingOrder, which is a Comparator object that sorts integers in reverse order.

Note that if the columnName parameter is not found in the DataTable, a DataTableException will be thrown. To avoid this, you can use the checkColumnIndex method to ensure that the column exists before sorting:
```java
if (!studentTable.hasColumn("Grade")) {
    throw new DataTableException("The 'Grade' column does not exist in the table");
}
studentTable.sortByColumn("Grade", descendingOrder);
```
### Other Operations
The DataTable class also supports other operations such as sorting, mapping, reducing, and more. These operations are performed using the Stream API, which can be accessed by calling the `rows` method:
```java
Stream<Map<String, String>> stream = dataTable.rows();
```
