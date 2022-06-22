---
id: data-bind 
title: Selcukes Databind 
sidebar_position: 2
---

[Selcukes DataBind](https://github.com/selcukes/selcukes-java/tree/master/selcukes-databind) helps to parse Json and Yml
files

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

:::note Selcukes DataBind is a transitive Dependency of `webdriver-binaries`.If you are using `webdriver-binaries`, then
ignore adding this dependency explicitly.
:::

## Data Mapper

DataMapper object helps to read and write Json or yaml/yml files with `@DataFile` annotation.

### Resolution Algorithm

DataMapper looks for matching data files in test resource folder by converting POJO class name to a SnakeCase json or
yaml/yml file.

- For POJO class `TestUsers.java`
- Matching test data files are `test_users.json` or `test_users.yml` or `test_users.yaml`

`@DataFile` annotation also takes additional attributes as follows

- fileName : Specify custom data file like 'sample_data.json'
- filePath : path where data file is located. 'src/main/resources'
- rootFolder : root directory
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