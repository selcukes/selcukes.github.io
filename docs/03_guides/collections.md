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
### Adding a Column

To add a new column to the table with the given key and defaultValue, use the `addColumn` method:

```java
dataTable.addColumn("Key", "Value");
```
Suppose we have a `DataTable` with the following data:
```java
DataTable<String, Integer> dataTable = DataTable.of(
Map.of("category", 1, "price", 10),
Map.of("category", 2, "price", 20),
Map.of("category", 1, "price", 30),
Map.of("category", 2, "price", 40));
```
To add Column `Code` with default `1234` then  we can use the addColumn() method as follows:
```java
dataTable.addColumn("Code", 1234);
```
This will update a DataTable with the following data:
```css
[price, category, Code]
[10, 1, 1234]
[20, 2, 1234]
[30, 1, 1234]
[40, 2, 1234]
```
### Join
The `join` method allows you to merge two DataTables based on a common column.

Suppose we have two `DataTables`, table1 and table2, with the following data:
```java
DataTable<String, Object> table1 = DataTable.of(
Map.of("name", "Alice", "age", 25),
Map.of("name", "Bob", "age", 30),
Map.of("name", "Charlie", "age", 35));

DataTable<String, String> table2 = DataTable.of(
Map.of("name", "Alice","gender", "F"),
Map.of("name", "Bob","gender", "M"),
Map.of("name", "Charlie","gender", "M"));
```
In the above two DataTable's, table1 and table2, with a common column "name". We join the two tables on this column using the join method, and merge the rows using a lambda expression that combines the data from both tables into a new HashMap.
```java
DataTable<String, Object> joinedTable = table1.join(table2, "name",
        (row1, row2) -> {
        var resultRow = new HashMap<String, Object>();
        resultRow.putAll(row1);
        resultRow.putAll(row2);
        return resultRow;
        });
```
This will produce a new DataTable with the following data:
```css
[name, gender, age]
[Alice, F, 25]
[Bob, M, 30]
[Charlie, M, 35]
```
In this example, we used the join method to merge two DataTables based on the common column "name", and then used a lambda expression to merge the rows from the two tables into a new HashMap. The resulting joinedTable contains the columns "name", "age", and "gender"

### AggregateByColumn
The `aggregateByColumn` method in the DataTable class allows you to perform aggregation operations on one column based on the values of another column.
Suppose we have a `DataTable` with the following data:
```java
DataTable<String, Integer> dataTable = DataTable.of(
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
{1=40, 2=60}
```
n this case, the "category" column has two distinct values: 1 and 2. The "price" values for the "category" 1 are 10 and 30, which sum up to 40. Similarly, the "price" values for the "category" 2 are 20 and 40, which sum up to 60.

### SortByColumn
The sortByColumn method allows you to sort the rows in the DataTable by the values in a particular column. You specify which column to sort by using the columnName parameter, which should be the name of the column you want to sort by. You also specify a Comparator object to determine the order of the values in the column.

For example, suppose you have a DataTable object that contains information about students, including their names and grades on an exam. You could sort the table by grade using the sortByColumn method like this:
```java
// Create a DataTable object with student data
DataTable<String, Object> studentTable = DataTable.of(
Map.of("Name", "Alice", "Grade", 85),
Map.of("Name", "Bob", "Grade", 72),
Map.of("Name", "Charlie", "Grade", 92),
Map.of("Name", "Dave", "Grade", 68));

// Create a Comparator object to sort by grade in descending order
Comparator<Object> gradeComparator = Comparator.comparing(
        obj -> Integer.valueOf(obj.toString()),
        Comparator.reverseOrder()
        );

// Sort the table by grade
studentTable.sortByColumn("Grade", gradeComparator);

```
In this example, the columnName parameter is "Grade", indicating that we want to sort by the "Grade" column, and the comparator parameter is gradeComparator, which is a Comparator object that sorts integers in reverse order.

### Other Operations
The DataTable class also supports other operations such as sorting, mapping, reducing, and more. These operations are performed using the Stream API, which can be accessed by calling the `rows` method:
```java
Stream<Map<String, String>> stream = dataTable.rows();
```
