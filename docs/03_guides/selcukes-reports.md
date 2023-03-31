---
id: selcukes-reports
title: Selcukes Reports
sidebar_position: 6
---

[Selcukes Reports](https://github.com/selcukes/selcukes-java/tree/master/selcukes-reports) helps with below capabilities
- Real-time Monitoring and Reporting
- Full-page Screenshot on Test Failure
- Video on Test Failure
- Microsoft Teams/Slack Notifications on Test Failure

## Setup

Selcukes Reports is primarily used as a Java dependency . We typically use a _build tool_ (such
as [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/)) to resolve the Selcukes Reports
dependency.

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs defaultValue="maven"
values={[
{label: 'Maven', value: 'maven'},{label: 'Gradle', value: 'gradle'}
]
}>

<TabItem value="maven">

```xml

<dependency>
    <groupId>io.github.selcukes</groupId>
    <artifactId>selcukes-reports</artifactId>
    <version>${selcukes.version}</version>
</dependency>
```

</TabItem>
<TabItem value="gradle">

```java
dependencies{
        implementation("io.github.selcukes:selcukes-reports:${selcukes.version}")
}
```

</TabItem>
</Tabs>

## Usage

Add `selcukes.yaml` file in `src/test/resource` folder and update below video configuration as required

```yaml
reports:
  emailReport: true
  htmlReport: true
  path: build
  fileName: index
  timestamp: false
video:
  recording: false
  type: MONTE
  ffmpegPath:
  watermark: false
notifier:
  notification: false
  type: slack
  webhookToken: WEBHOOKXXXX
  apiToken: APIXXXX
  channel: selcukes
  authorIcon: https://github.com/rameshbabuprudhvi.png
```

Create a test class as follows

```java
public class RecorderTest {
    private final Logger logger = LoggerFactory.getLogger(getClass());
    private WebDriver driver;
    private ScreenPlay screenPlay;

    @BeforeTest
    public void beforeTest() {
        driver = new LocalDriver().createWebDriver(CHROME);
        driver.manage().window().maximize();
        screenPlay = ScreenPlayBuilder
                .getScreenPlay(driver)
                .withRecorder(RecorderType.FFMPEG)
                .start();
    }

    @Test
    public void loginTest() {
        driver.get("http://www.princexml.com/samples/");
        logger.debug(driver::getTitle);
        Assert.assertTrue(driver.findElement(By.xpath("//a[contains(@href,'dictionary.pdf')]")).isDisplayed());
        driver.findElement(By.xpath("//a[contains(@href,'dictionary.pdf')]")).click();
        Assert.assertTrue(driver.getCurrentUrl().contains(".pdf"));
    }

    @AfterMethod
    public void afterMethod(ITestResult result) {
        screenPlay
                .withResult(result)
                .ignoreCondition()
                .attachScreenshot()
                .withNotifier(NotifierType.SLACK) //Default Notifier is TEAMS
                .sendNotification("This is sample Test Step");

    }

    @AfterTest
    public void afterTest() {
        if (driver != null)
            driver.quit();
        screenPlay
                .attachVideo()
                .attachLogs();
    }
}
```
