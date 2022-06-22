---
id: webdriver-binaries
title: WebDriver Binaries
sidebar_position: 1
---

[WebDriver Binaries](https://github.com/selcukes/selcukes-java/tree/master/webdriver-binaries) is an open-source Java
library that automatically downloads and configures the binary drivers (e.g., chromedriver, geckodriver, msedgedriver,
etc.) required by Selenium WebDriver.

## Motivation

[Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) is a library that allows controlling web
browsers programmatically. It provides a cross-browser API that can be used to drive web browsers (e.g., Chrome, Edge,
or Firefox, among others) using different programming languages (e.g., Java, JavaScript, Python, C#, or Ruby). The
primary use of Selenium WebDriver is implementing automated tests for web applications.

Selenium WebDriver carries out the automation using the native support of each browser. For this reason, we need to
place a binary file called _driver_ between the test using the Selenium WebDriver API and the browser to be controlled.
Examples of drivers for major web browsers nowadays are [chromedriver](https://chromedriver.chromium.org/) (for Chrome)
, [geckodriver](https://github.com/mozilla/geckodriver/) (for Firefox),
or [msedgedriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) (for Edge). As you can see in
the following picture, the communication between the WebDriver API and the driver binary is done using a standard
protocol called [W3C WebDriver](https://www.w3.org/TR/webdriver/) (formerly the so-called _JSON Wire Protocol_). Then,
the communication between the driver and the browser is done using the native capabilities of each browser.

![Architecture](@site/static/img/selenium-webdriver-architecture.png)

From a practical point of view, we need to make a _driver management process_ to use Selenium WebDriver. This process
consists on:

1. Download. Drivers are platform-specific binary files. To download the proper driver, we have to identify the driver
   type we need (e.g., chromedriver if we want to use Chrome), the operating system (typically, Windows, Linux, or Mac
   OS), the architecture (typically, 32 or 64 bits), and very important, the driver version. Concerning the version,
   each driver release is usually compatible with a given browser version(s). For this reason, we need to discover the
   correct driver version for a specific browser release (typically reading the driver documentation or release notes).
2. Setup. Once we have downloaded the driver to our computer, we need to provide a way to locate this driver from our
   Selenium WebDriver tests. In Java, this setup can be done in two different ways. First, we can add the driver
   location to our `PATH` environmental variable. Second, we can use _Java system properties_ to export the driver path.
   Each driver path should be identified using a given system property, as follows:

```java
System.setProperty("webdriver.chrome.driver","/path/to/chromedriver");
System.setProperty("webdriver.gecko.driver","/path/to/geckodriver");
System.setProperty("webdriver.edge.driver","/path/to/msedgedriver");
System.setProperty("webdriver.opera.driver","/path/to/operadriver");
System.setProperty("webdriver.ie.driver","C:/path/to/IEDriverServer.exe");
```

3. Maintenance. Last but not least, we need to warranty the compatibility between driver and browser in time. This step
   is relevant since modern browsers automatically upgrade themselves (i.e., they are _evergreen_ browsers), and for
   this reason, the compatibility driver-browser is not warranted in the long run. For instance, when a WebDriver test
   using Chrome faces a driver incompatibility, it reports the following error message: "_this version of chromedriver
   only supports chrome version N_." As you can see
   in[StackOverflow]( https://stackoverflow.com/search?q=this+version+of+chromedriver+only+supports+Chrome+version),
   this is a recurrent problem for manually managed drivers (chromedriver in this case).

## Setup

WebDriver Binaries is primarily used as a Java dependency . We typically use a _build tool_ (such
as [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/)) to resolve the WebDriver Binaries dependency.

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
    <artifactId>webdriver-binaries</artifactId>
    <version>${selcukes.version}</version>
    <scope>test</scope>
</dependency>
```
</TabItem>
<TabItem value="gradle">

```java
dependencies{
        testImplementation("io.github.selcukes:webdriver-binaries:${selcukes.version}")
}
```
</TabItem>
</Tabs>

## Driver Management

The primary use of WebDriver Binaries is the automation of driver management. For using this feature, you need to select
a given driver in the WebDriver Binaries API (e.g., `chromeDriver()` for Chrome) and invoke the method `setup()`. The
following example shows a test case using [TestNG](https://testng.org/doc/), Selenium WebDriver, WebDriver Binaries. In
this test, we invoke WebDriver Binaries in the setup method for all tests (`@BeforeClass`). This way, the required
binary (chromeDriver) will be available for all the WebDriver tests using Chrome in this class.

```java
public class WebDriverTest {

    private WebDriver driver;

    @BeforeClass
    public static void setupClass() {
        WebDriverBinary.chromeDriver().setup();
    }

    @Before
    public void setupTest() {
        driver = new ChromeDriver();
    }

    @After
    public void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void test() {
        // Your test code here
    }

}
```

WebDriver Binaries provides a set of _binaries_ for Chrome, Firefox, Edge, Opera, Chromium, and Internet Explorer. The
basic use of these binary is the following:

```java
WebDriverBinary.chromeDriver().setup();
WebDriverBinary.firefoxDriver().setup();
WebDriverBinary.ieDriver().setup();
WebDriverBinary.edgeDriver().setup();
 WebDriverBinary.operaDriver().setup();
```

## Resolution Algorithm

WebDriver Binaries executes a _resolution algorithm_ when calling to `setup()` in a given manager. The most relevant
parts of this algorithm are the following:

1. WebDriverBinary tries to find the browser version. To this aim, WebDriverBinary uses internally a knowledge database
   called commands' database. This database is a collection of shell commands used to discover the version of a given
   browser in the different operating systems (e.g., `google-chrome --version` for Chrome in Linux).
2. Using the browser version, it tries to find the proper driver version. This process is different for each browser. In
   Chrome and Edge, their respective drivers (chromedriver and msedgedriver) maintainers also publish resources to
   identify the suitable driver version for a given major browser release. For instance, to find out the version of
   chromedriver required for Chrome 100, we need to read the
   following [file](https://chromedriver.storage.googleapis.com/LATEST_RELEASE_100).
3. Once the driver version is discovered, WebDriverBinary downloads this driver to a local cache (located
   at `%temp%/webdrivers` by default). These drivers are reused in subsequent calls.
4. Finally, WebDriverBinary exports the driver path using Java system properties (e.g., `webdriver.chrome.driver` in the
   case of the Chrome manager).

This process automated the first two stages of the driver management previously introduced, i.e., download and setup. To
support the third stage (i.e., maintenance), WebDriverBinary implements _resolution cache_. This cache (called by
default `version.properties` and stored in the root of the driver cache) is a file that stores the relationship between
the resolved driver and browser versions. This relationship is valid during a given _time-to-live_ (TTL). The default
value for this TTL is 1 hour for browsers and drivers. In other words, the discovered browser version is valid for 1
hour. This mechanism improves the performance dramatically since the second (and following) calls to the resolution
algorithm for the same browser are resolved using only local resources (i.e., without using the shell nor requesting
external services).

## Advanced Configuration

WebDriver Binaries provides different ways of configuration. First, by using its _Java API_. To that aim, each manager (
e.g., `chromeDriver()`, `firefoxDriver()`, etc., allows to concatenate different methods of this API to specify custom
options or preferences. For example (the explanation of these methods and the other possibilities are explained in the
tables at the end of this section):

Description | Method
  --- | ---
Download the latest binary| WebDriverBinary.chromeDriver().setup(); <br/> WebDriverBinary.firefoxDriver().setup(); <br/> WebDriverBinary.ieDriver().setup(); <br/> WebDriverBinary.edgeDriver().setup(); <br/> WebDriverBinary.edgeDriver().setup(); <br/> WebDriverBinary.operaDriver().setup(); <br/> WebDriverBinary.grid().setup();
Download binaries for specific architecture | WebDriverBinary.chromeDriver().arch64().setup(); <br/> WebDriverBinary.firefoxDriver().arch32().setup();
Download binaries by specifying custom download location| WebDriverBinary.chromeDriver().targetPath("temp").setup(); WebDriverBinary.firefoxDriver().targetPath("downloadLocation").setup();
Download binaries for a specific release version | WebDriverBinary.firefoxDriver().version("v0.26.0").setup();





