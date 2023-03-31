---
id: logger 
title: Selcukes logger 
sidebar_position: 9
---
## CustomLog annotation for Selcukes logger
- Add Lombok dependency to pom.xml

```xml

<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>LATEST</version>
    <scope>provided</scope>
</dependency>
```

- Create `lombok.config` file in project parent folder and add below properties

```properties title="lombok.config"
lombok.log.fieldName = logger
lombok.log.custom.declaration = io.github.selcukes.commons.logging.Logger io.github.selcukes.commons.logging.LoggerFactory.getLogger(TYPE)
```

### Usage

```java
package io.github.selcukes.java;

import lombok.CustomLog;
import org.testng.annotations.Test;

@CustomLog
public class LoggerTest {
    @Test
    public void testLogs() {
        logger.info(() -> "This is sample log");
    }
}


```
