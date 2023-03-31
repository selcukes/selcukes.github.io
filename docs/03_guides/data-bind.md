---
id: data-bind 
title: Selcukes Databind 
sidebar_position: 1
---

[Selcukes DataBind](https://github.com/selcukes/selcukes-java/tree/master/selcukes-databind) helps to parser JSON, YML, XML, CSV, Properties and Excel files.

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
Selcukes DataBind is a transitive Dependency of `webdriver-binaries`.If you are using `webdriver-binaries`, then
ignore adding this dependency explicitly.
:::

## Data Mapper

DataMapper object helps to read and write Json , xml or yaml/yml files with `@DataFile` annotation.

### Resolution Algorithm

DataMapper looks for matching data files in test resource folder by converting POJO class name to a SnakeCase json or
yaml/yml file.

- For POJO class `TestUsers.java`
- Matching test data files are `test_users.json` or `test_users.xml` or `test_users.yml` or `test_users.yaml`

`@DataFile` annotation also takes additional attributes as follows

- fileName : Specify custom data file like 'sample_data.json'
- filePath : path where data file is located. 'src/main/resources'
- streamLoader: true/false, by default its false. This attribute is used to load data files from class loader which
  helps to read from jar file.
  :::note 
   if you enable streamLoader then fileName attribute is mandatory.
  :::
### Read data files

Let's first look at the `test_users.json` file we'll be reading

```json
{
  "users": [
    {
      "username": "MyName",
      "password": "things"
    },
    {
      "username": "TestName",
      "password": "eggs"
    }
  ]
}
```

Then, let's define the POJO class with `@DataFile` annotation

```java

@Data
@DataFile
static class TestUsers {
    List<User> users;
}
```

Finally, let's create our User class:

```java

@Data
static class User {
    private String username;
    private String password;

}
```

We're going to use DataMapper to read our JSON file into an TestUsers object, so let's set that up now

```java
final TestUsers testUsers=DataMapper.parse(TestUsers.class);
```

We'll find that our TestUsers object is populated from the file, including the list of User.

Here is full example code to demonstrate to parse and read `test_users.json` file

```java
public class ReadDataFileTest {
    @DataProvider
    public Iterator<Object[]> getTestUsers() {
        final TestUsers testUsers = DataMapper.parse(TestUsers.class);
        final List<Object[]> data = new ArrayList<>();
        testUsers.getUsers()
                .forEach(user -> data.add(new Object[]{user}));
        return data.iterator();
    }

    @Test(dataProvider = "getTestUsers")
    public void jsonTest(User user) {
        Assert.assertFalse(user.getUsername().isBlank());
        System.out.println("Username[" + user.getUsername() + "] Password[" + user.getPassword() + "]");
    }

    @Data
    @DataFile
    static class TestUsers {
        List<User> users;
    }

    @Data
    static class User {
        private String username;
        private String password;

    }
}
```

### Update data files

We're also going to use DataMapper to update a TestSample into a file. This time we will try using yml file.

Let's quickly look at the `test_sample.yml` file we'll be writing the values

```yaml
users:
  user1:
    username: "Ramesh"
    password: "4177472e-23a3-4426-893f-8a794af7189c"
  user2:
    username: "Babu"
    password: "40aafad2-1d24-4d6c-85e2-b7630dc17c57"
```

Then, let's define the POJO class with `@DataFile` annotation

```java

@Data
@DataFile(fileName = "test_sample.yml")
static class TestSample {
    Map<String, Map<String, String>> users;
}
```

Let's read our TestSample and update values:

```java
UUID uuid=UUID.randomUUID();
        TestSample testSample=DataMapper.parse(TestSample.class);
        testSample.getUsers().get("user1").put("password",uuid.toString());
```

Let's write our updated TestSample values:

```java
DataMapper.write(testSample);
```

Here is full example code to demonstrate to update and write values to `test_sample.yml`

```java
public class UpdateDataFileTest {
    @SneakyThrows
    @Test
    public void testClass() {
        UUID uuid = UUID.randomUUID();
        TestSample testSample = DataMapper.parse(TestSample.class);
        testSample.getUsers().get("user1").put("password", uuid.toString());
        DataMapper.write(testSample);
    }

    @Data
    @DataFile(fileName = "test_sample.yml")
    static class TestSample {
        Map<String, Map<String, String>> users;
    }
}
```

### Write data files

We're also going to use DataMapper to write a `Customer` out to a data file. This process is similar to update data
file, however it will create a new data file if it is not found.

Let's create `Customer` POJO class

```java

@Data
@DataFile(fileName = "customer.yml")
static class Customer {
    String firstName;
    String lastName;
    int age;
    List<Details> contactDetails;
}

@Data
static class Details {
    String type;
    String number;
}
```

Now Let's create a set object of Customer:

```java
        Details details1=new Details();
        details1.setNumber("512");
        details1.setType("CSM");

        Details details2=new Details();
        details2.setNumber("123");
        details2.setType("A-CSM");

        Customer customer=new Customer();
        customer.setAge(5);
        customer.setFirstName("Mark");
        customer.setLastName("Jones");
        customer.setContactDetails(List.of(details1,details2));
```

Let's write our Customer using write method:

```java
DataMapper.write(customer);
```

When we look into the `customer.yml`, it should look similar to:

```yaml
firstName: "Mark"
lastName: "Jones"
age: 5
contactDetails:
  - type: "CSM"
    number: "512"
  - type: "A-CSM"
    number: "123"
```

Here is full example code to create data file.

```java
public class CreateDataFileTest {

    @Test
    public void createDataFileTest() {
        Details details1 = new Details();
        details1.setNumber("512");
        details1.setType("CSM");

        Details details2 = new Details();
        details2.setNumber("123");
        details2.setType("A-CSM");

        Customer customer = new Customer();
        customer.setAge(5);
        customer.setFirstName("Mark");
        customer.setLastName("Jones");
        customer.setContactDetails(List.of(details1, details2));

        DataMapper.write(customer);

        Customer newCustomer = DataMapper.parse(Customer.class);
        newCustomer.getContactDetails().forEach(details -> System.out.println(details.getType() + " : " + details.getNumber()));
    }

    @Data
    @DataFile(fileName = "customer.yml")
    static class Customer {
        String firstName;
        String lastName;
        int age;
        List<Details> contactDetails;
    }

    @Data
    static class Details {
        String type;
        String number;
    }

}
```
## ExcelMapper

ExcelMapper is used to parse Excel sheet to Stream of entity classes.

Here is an example usage of reading Excel sheet.

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

As explained in `DataMapper` section, fileName is optional value - By default ExcelMapper will look for datafile name as SnakeCase of Entity class name followed by xlsx as suffix. And sheetName attribute is also an optional. By default, the first one sheet name in Excel file is used.

In terms of fields' mapping, you can use custom `@Key` annotation.

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

Similar to converters, `ExcelMapper` allows you to substitute field value prior to parsing Excel sheet

Consider, we have given Excel field values as `${DATE}` in Excel file. On the fly this field value will be converted to current date and ensure the value assigned to respective field.

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
## PropertiesMapper

PropertiesMapper is used to parse Properties file to an entity classes.

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
## CsvMapper
CsvMapper is a utility class that provides methods to parse CSV files into DataTables. 
### Parsing CSV Files
To parse a CSV file, call the parse method, passing in the file path and, optionally, a regular expression to split the CSV lines by:
```java
Path filePath = Paths.get("path/to/file.csv");
DataTable<String, String> dataTable = CsvMapper.parse(filePath);
```
Optionally, you can specify the regex to split the line by:
```java
Path filePath = Paths.get("path/to/file.csv");
DataTable<String, String> dataTable = CsvMapper.parse(filePath, CsvMapper.CSV_REGEX);
```
:::note 
The parse method throws a DataMapperException if an error occurs while parsing the file. Make sure to handle this exception accordingly.
:::
