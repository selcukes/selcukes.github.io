---
id: api-test 
title: Api Test
sidebar_position: 4
---

```java
package org.example;

import io.github.selcukes.commons.http.Response;
import io.github.selcukes.commons.http.WebClient;
import lombok.CustomLog;
import lombok.SneakyThrows;
import org.testng.annotations.Test;

@CustomLog
public class WebClientTest {

    @SneakyThrows
    @Test
    public void postTest() {
        StringBuilder json = new StringBuilder();
        json.append("{");
        json.append("\"name\":\"Ramesh\",");
        json.append("\"notes\":\"hello\"");
        json.append("}");

        WebClient client = new WebClient("https://httpbin.org/post");
        Response response = client.post(json);

        logger.info(response::getBody);
    }

    @SneakyThrows
    @Test
    public void requestTest() {

        WebClient client = new WebClient("https://httpbin.org/get");
        Response response = client.sendRequest();
        logger.info(response::getBody);
    }

    @SneakyThrows
    @Test
    public void bearerAuthTest() {

        WebClient client = new WebClient("https://httpbin.org/#/Auth/get_bearer");
        Response response = client.authenticator("hello")
                .sendRequest();
        logger.debug(response::getBody);
    }

    @SneakyThrows
    @Test
    public void authTest() {

        WebClient client = new WebClient("https://httpbin.org/#/Auth/get_basic_auth__user___passwd_");
        Response response = client.authenticator("hello", "hello")
                .sendRequest();
        logger.debug(() -> response.getStatusCode() + "");
    }
}

```
