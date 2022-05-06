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

import io.appium.java_client.AppiumDriver;
import io.github.selcukes.core.driver.DriverManager;
import io.github.selcukes.core.driver.GridRunner;
import io.github.selcukes.core.enums.DeviceType;
import io.github.selcukes.core.page.MobilePage;
import org.openqa.selenium.By;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

//tag::snippet-in-doc[]
public class MobileTest {
    @BeforeSuite
    void beforeSuite() {
        GridRunner.startAppiumServer();
    }

    @Test
    public void remoteTest() {
        AppiumDriver driver = DriverManager.createDriver(DeviceType.MOBILE);
        MobilePage page = new MobilePage(driver);
        page.enableDriverEvents();
        page.click(By.xpath("//android.widget.TextView[contains(@text,'Views')]"));
    }

    @AfterSuite
    void afterSuite() {
        DriverManager.removeDriver();
        GridRunner.stopAppiumServer();
    }
}
//end::snippet-in-doc[]