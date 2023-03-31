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
To create a DataTable with initial data, you can use the of method and pass a list of maps, where each map represents a row of data with the keys being the column names and the values being the data for that row:

```java
DataTable<String, Object> dataTable = DataTable.of(
Map.of("name", "Alice", "age", 25),
Map.of("name", "Bob", "age", 30),
Map.of("name", "Charlie", "age", 35));
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
### Retrieving Column Entries
The getColumnEntries method in the DataTable class allows you to retrieve a list of all the values in a given column of the table.

Here is an example usage of the getColumnEntries method:
```java
DataTable<String, Object> dataTable = DataTable.of(
Map.of("name", "Alice", "age", 25),
Map.of("name", "Bob", "age", 30),
Map.of("name", "Charlie", "age", 35));

List<Integer> ages = dataTable.getColumnEntries("age");
```
This will produce the following output:
```css
[25, 30, 35]
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
DataTable<String, String> dataTable = DataTable.of(
Map.of("Key1", "A", "Key2", "X", "Value", "10"),
Map.of("Key1", "A", "Key2", "Y", "Value", "20"),
Map.of("Key1", "B", "Key2", "X", "Value", "30"),
Map.of("Key1", "B", "Key2", "Y", "Value", "40"));

Map<String, DataTable<String, String>> groupedRows = dataTable.groupByColumn("Key1");
```
This will produce a Map of DataTable with the following data:
```css
A{
[Value, Key2, Key1]
[10, X, A]
[20, Y, A]
}
B{
[Value, Key2, Key1]
[30, X, B]
[40, Y, B]
}
```
In this example, we grouped the rows of dataTable by the values in the "Key1" column, which resulted in a map where each key corresponds to a unique value in the "Key1" column, and each value is a new DataTable containing the rows with that key.

### Updating Rows
To update each row in the table by applying a function to the map representing each row, use the `updateRows` method:
```java
dataTable.updateRows(row -> {
        row.put("Key3", "Value3");
        return row;
        });
```
This will update the value for the "Key3" column in each row of the table. The function passed to updateRows takes a Map<K, V> as input, which represents a single row of the table. In this example, the function adds a new key-value pair to each row and returns the updated row.

### Updating Cell
To update a cell at the given row index and column key in a DataTable, use the updateCell method:
```java
 dataTable.updateCell(rowIndex, "Key", "newValue");
```
This will update the cell at the specified row index and column key with the new value.
### Removing Rows
To remove rows from the DataTable based on a given condition, use the removeRows method. The method takes a Predicate as input, which is used to filter the rows to remove.
```java
// Create a sample DataTable
DataTable<String, Integer> dataTable = DataTable.of(
Map.of("category", 1, "price", 10),
Map.of("category", 2, "price", 20),
Map.of("category", 1, "price", 30),
Map.of("category", 2, "price", 40)
);

// Define the predicate to filter rows
Predicate<Map<String, Integer>> predicate = row -> row.get("category") == 1;

// Remove the rows matching the predicate
dataTable.removeRows(predicate);
```
To remove a specific row from the DataTable using its index, use the removeRow method.
```java
// Create a sample DataTable
DataTable<String, Object> dataTable = DataTable.of(
        Map.of("name", "Alice", "age", "25"),
        Map.of("name", "Bob", "age", "30"),
        Map.of("name", "Charlie", "age", "35")
        );

// Remove the row at index 1
        dataTable.removeRow(1);
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
### Rename Column
To update the column names in a DataTable using the mapping specified in the columnMapping parameter, use the renameColumn method:
```java
Map<String, String> columnMapping = Map.of("Key1", "NewKey1", "Key2", "NewKey2");
dataTable.renameColumn(columnMapping);
```
This will update the column names in the dataTable according to the mapping specified in columnMapping.

### Selecting Columns
The selectColumns method in the DataTable class allows you to return a new DataTable with only the selected columns. For example, if you have a DataTable with columns "A", "B", and "C", and you want to select only columns "A" and "C", you can use this method as follows:
```java
DataTable<String, String> dataTable = DataTable.of(
Map.of("A", "a1", "B", "b1", "C", "c1"),
Map.of("A", "a2", "B", "b2", "C", "c2"));

List<String> columns = Arrays.asList("A", "C");

DataTable<String, String> selectedColumns = dataTable.selectColumns(columns);
```
This will produce a new DataTable with only columns "A" and "C":
```css
[A, C]
[a1, c1]
[a2, c2]
```
### Selecting Rows
The selectRows method allows you to return a new DataTable instance that contains only the rows that satisfy the given predicate. For example, if you have a DataTable with the following data:
```java
DataTable<String, Integer> dataTable = DataTable.of(
Map.of("A", 1, "B", 2, "C", 3),
Map.of("A", 4, "B", 5, "C", 6),
Map.of("A", 7, "B", 8, "C", 9));
```
And you want to select only the rows where the value in column "A" is greater than 3, you can use this method as follows:
```java
DataTable<String, Integer> selectedRows = dataTable.selectRows(row -> row.get("A") > 3);
```
This will produce a new DataTable with only the rows where the value in column "A" is greater than 3:
```css
[A, B, C]
[4, 5, 6]
[7, 8, 9]
```
### Join Tables

The `join` method is used to merge two DataTables based on a common column. Here's an example of how to use it:

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
In the example above, we have two DataTables, table1 and table2, with a common column "name". We can use the join method to merge the two tables on this column, and a lambda expression to merge the rows from both tables into a new map.
```java
DataTable<String, Object> joinedTable = table1.join(table2, "name",
        (row1, row2) -> {
        var resultRow = new HashMap<String, Object>();
        resultRow.putAll(row1);
        resultRow.putAll(row2);
        return resultRow;
        });
```
The resulting joinedTable contains the columns "name", "age", and "gender". Here's the data it contains:
```css
[name, gender, age]
[Alice, F, 25]
[Bob, M, 30]
[Charlie, M, 35]
```
In summary, we can use the join method to merge two DataTables based on a common column, and a lambda expression to merge the rows from both tables into a new map. The resulting DataTable contains the merged data.

### Aggregate by Column
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
In this case, the "category" column has two distinct values: 1 and 2. The "price" values for the "category" 1 are 10 and 30, which sum up to 40. Similarly, the "price" values for the "category" 2 are 20 and 40, which sum up to 60.

### Sort by Column
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
This will sort a DataTable as follows:
```css
[Name, Grade]
[Charlie, 92]
[Alice, 85]
[Bob, 72]
[Dave, 68]
```
In this example, the columnName parameter is "Grade", indicating that we want to sort by the "Grade" column, and the comparator parameter is gradeComparator, which is a Comparator object that sorts integers in reverse order.
### Contains
To check if a DataTable contains an expected row, use the contains method:
```java
Map<String, String> expectedRow = Map.of("Key1", "A", "Key2", "X", "Value", "10");
boolean result = dataTable.contains(expectedRow);
```
This will check if the dataTable contains a row with the same keys and values as expectedRow, and return true if it does, false otherwise.

### Other Operations
The DataTable class also supports other operations such as sorting, mapping, reducing, and more. These operations are performed using the Stream API, which can be accessed by calling the `rows` method:
```java
Stream<Map<String, String>> stream = dataTable.rows();
```
