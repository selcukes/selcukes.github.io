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
import io.github.selcukes.core.driver.GridRunner;
import io.github.selcukes.core.enums.DeviceType;
import io.github.selcukes.core.page.WinPage;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

//tag::snippet-in-doc[]
public class NotepadTest {
    @BeforeSuite
    public void beforeSuite() {
        GridRunner.startAppiumServer();
    }

    @Test
    public void notepadTest() {
        WindowsDriver driver = DriverManager.createDriver(DeviceType.DESKTOP);
        WinPage page = new WinPage(driver);
        page.enableDriverEvents();
        By edit = By.className("Edit");
        page.enter(edit, "This is sample")
                .enter(edit, Keys.ENTER)
                .enter(edit, "Time is")
                .enter(edit, Keys.ENTER)
                .enter(edit, Keys.F5)
                .enter(edit, Keys.CONTROL + "w" + Keys.CONTROL)
                .click(By.name("Don't Save"));
    }

    @AfterSuite
    public void afterSuite() {
        DriverManager.removeDriver();
        GridRunner.stopAppiumServer();
    }
}
//end::snippet-in-doc[]