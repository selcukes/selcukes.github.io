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
Selcukes DataBind is a transitive Dependency of `selcukes-commons`.If you are using `selcukes-commons`, then
ignore adding this dependency explicitly.
:::

## Data Mapper

DataMapper object helps to read and write Json , xml or yaml/yml files with `@DataFile` annotation.

### DataFile Lookup Strategy

The `DataMapper` uses a specific strategy to locate the appropriate data files in the test resource folder. This strategy is based on converting the POJO class name to a SnakeCase JSON or YAML/YML file.

For example, for the POJO class `TestUsers.java`, the matching test data files would be test_users.json, test_users.xml, test_users.yml, or test_users.yaml

`@DataFile` annotation also takes additional attributes as follows

- fileName : This attribute allows you to specify a custom data file name, such as `sample_data.json`
- filePath : This attribute is used to specify the path where the data file is located, such as `src/main/resources`.
- streamLoader: This attribute is set to false by default. If set to true, the DataMapper loads data files from the class loader, which allows for reading from a JAR file.
  :::note
  If you enable `streamLoader`, then the `fileName` attribute is mandatory.
  :::
### Read data files

To illustrate how to read data files using the DataMapper object, let's consider the `test_users.json` file below:

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

First, we define a POJO class with the `@DataFile` annotation:

```java

@Data
@DataFile
static class TestUsers {
    List<User> users;
}
```

Then, we create our User class:

```java

@Data
static class User {
    private String username;
    private String password;

}
```

To read the `test_users.json` file into a TestUsers object using DataMapper, we use the following code:

```java
final TestUsers testUsers=DataMapper.parse(TestUsers.class);
```

Our `TestUsers` object is now populated with the data from the file, including the list of User.

The following code demonstrates a full example of how to parse and read the `test_users.json` file:

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

In addition to reading data files, DataMapper can also update them. Let's take a look at how to do this with a YAML file, `test_sample.yml`.

```yaml
users:
  user1:
    username: "Ramesh"
    password: "4177472e-23a3-4426-893f-8a794af7189c"
  user2:
    username: "Babu"
    password: "40aafad2-1d24-4d6c-85e2-b7630dc17c57"
```

First, we define the POJO class with `@DataFile` annotation.

```java

@Data
@DataFile(fileName = "test_sample.yml")
static class TestSample {
    Map<String, Map<String, String>> users;
}
```

To update the values in the test_sample.yml file, we first read the file into a TestSample object:

```java
UUID uuid=UUID.randomUUID();
TestSample testSample=DataMapper.parse(TestSample.class);
```

We can then modify the values in the TestSample object as desired. For example, let's update the password for "user1" to a new UUID:
```java
testSample.getUsers().get("user1").put("password", uuid.toString());
```
Finally, we can write the updated TestSample object back to the `test_sample.yml` file:
```java
DataMapper.write(testSample);
```
Here is the complete example code for updating and writing to the `test_sample.yml` file:

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

We'll use DataMapper to write a `Customer` object to a data file. If the file doesn't exist, it will create a new one.

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

Next, let's create a Customer object:

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
Now, let's use the `write` method to write the Customer to a YAML file:

```java
DataMapper.write(customer);
```

The resulting `customer.yml` file will look like this:

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

As explained in the `DataMapper` section, the fileName attribute is optional - by default, ExcelMapper will look for a datafile name as the SnakeCase of the entity class name followed by xlsx as a suffix. The sheetName attribute is also optional. By default, the first sheet name in the Excel file is used.

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

PropertiesMapper is used to parse a `.properties` file into a set of entity classes.

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
In this example, we have defined a TestConfig class with properties that match those defined in the test_config.properties file. We have also used the @Interpolate annotation to enable property interpolation using the StringSubstitutor class.

We can then call PropertiesMapper.parse(TestConfig.class) to parse the properties file into a TestConfig object.

Note that we have also used the @Key annotation to specify the mapping between property names and class fields. We have also used the @DataFile annotation to indicate that the data source is a file. Finally, we have used the @Data annotation to indicate that this is a data object that should be parsed by PropertiesMapper.

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
