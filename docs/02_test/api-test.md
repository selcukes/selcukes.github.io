---
id: api-test 
title: Api Test
sidebar_position: 4
---

```java
package org.example;
import io.github.selcukes.commons.http.Response;
import io.github.selcukes.core.page.ApiPage;
import io.github.selcukes.core.page.Pages;
import lombok.CustomLog;
import lombok.Data;
import org.testng.annotations.Test;

@CustomLog
public class ApiTest {
    @Test
    public void authTest() {
        String user = "{\n" +
                "    \"email\": \"eve.holt@reqres.in\",\n" +
                "    \"password\": \"admin\"\n" +
                "}";
        ApiPage page = Pages.apiPage();
        Response response = page.request("https://reqres.in/api/register")
                .post(user);
        page.assertThat().response(response).isOk();
        logger.info(() -> "Token is: " + response.bodyAs(ResponseBody.class).getToken());
    }

    @Data
    static class ResponseBody {
        String id;
        String token;
    }
}

```
