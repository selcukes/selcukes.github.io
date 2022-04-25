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

import io.appium.java_client.windows.WindowsDriver;
import io.github.selcukes.core.driver.DriverManager;
import io.github.selcukes.core.enums.DeviceType;
import io.github.selcukes.core.page.WinPage;
import org.openqa.selenium.By;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

//tag::snippet-in-doc[]
public class NotepadTest {
    DriverManager<WindowsDriver> driverManager;

    @BeforeTest
    public void beforeTest() {
        driverManager = new DriverManager<>();
    }

    @Test
    public void notepadTest() {
        WindowsDriver driver = driverManager.createDriver(DeviceType.DESKTOP);
        WinPage page = new WinPage(driver);
        page.write(By.className("Edit"), "This is sample");

    }

    @AfterTest
    public void afterTest() {
        driverManager.getManager().destroyDriver();
    }
}
//end::snippet-in-doc[]