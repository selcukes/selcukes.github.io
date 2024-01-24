---
id: data-mapper
title: DataMapper
sidebar_position: 2
---
DataMapper object helps to read and write Json, xml or yaml/yml files with `@DataFile` annotation.

### DataFile Lookup Strategy

The `DataMapper` uses a specific strategy to locate the appropriate data files in the test resource folder. This
strategy is based on converting the POJO class name to a SnakeCase JSON or YAML/YML file.

For example, for the POJO class `TestUsers.java`, the matching test data files would be `test_users.json`, `test_users.xml`,
`test_users.yml`, or `test_users.yaml`

`@DataFile` annotation also takes additional attributes as follows

- fileName: This attribute allows you to specify a custom data file name, such as `sample_data.json`
- filePath: This attribute is used to specify the path where the data file is located, such as `src/main/resources`.
- streamLoader: This attribute is set to false by default. If set to true, the DataMapper loads data files from the
  class loader, which allows for reading from a JAR file.
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
final TestUsers testUsers = DataMapper.parse(TestUsers.class);
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

In addition to reading data files, DataMapper can also update them. Let's take a look at how to do this with a YAML
file, `test_sample.yml`.

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
UUID uuid = UUID.randomUUID();
TestSample testSample = DataMapper.parse(TestSample.class);
```

We can then modify the values in the TestSample object as desired. For example, let's update the password for "user1" to
a new UUID:

```java
testSample.getUsers().

get("user1").

put("password",uuid.toString());
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

Here is a full example code to create data file.

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