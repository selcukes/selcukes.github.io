/*
 *  Copyright (c) Ramesh Babu Prudhvi.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package io.github.selcukes.tests;

import io.github.selcukes.core.driver.DriverManager;
import io.github.selcukes.core.driver.GridRunner;
import io.github.selcukes.core.enums.DeviceType;
import io.github.selcukes.core.page.WebPage;
import io.github.selcukes.wdb.enums.DriverType;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

//tag::snippet-in-doc[]
public class WebTest {
    @BeforeSuite
    void beforeSuite() {
        GridRunner.startSeleniumServer(DriverType.CHROME);
    }

    @Test
    public void webTest() {
        WebDriver driver = DriverManager.createDriver(DeviceType.BROWSER);
        WebPage page = new WebPage(driver);
        page.open("https://www.google.com/");
        Assert.assertEquals(page.title(), "Google");
    }

    @AfterMethod
    void afterTest() {
        DriverManager.removeDriver();
    }
    //end::snippet-in-doc[]
}
