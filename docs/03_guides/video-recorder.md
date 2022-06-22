---
id: video-recorder 
title: Video Recorder 
sidebar_position: 8
---

[Video Recorder](https://github.com/selcukes/selcukes-java/tree/master/video-recorder) allows recording video of your
tests with minimal configurations.

## Setup

Video Recorder is primarily used as a Java dependency . We typically use a _build tool_ (such
as [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/)) to resolve the Video Recorder dependency.

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
    <artifactId>video-recorder</artifactId>
    <version>${selcukes.version}</version>
</dependency>
```

</TabItem>
<TabItem value="gradle">

```java
dependencies{
        implementation("io.github.selcukes:video-recorder:${selcukes.version}")
        }
```

</TabItem>
</Tabs>

:::note Selcukes Extent Reports is a transitive Dependency of `selcukes-reports`.If you are using `selcukes-reports`,
then ignore adding this dependency explicitly.
:::

:::warning If you are using `selcukes-reports` then refer [Selcukes TestNG](selcukes-reports.md) for video configuration
integration
:::

## Usage

Add `selcukes.yaml` file in `src/test/resource` folder and update below video configuration as required

```yaml
video:
  recording: true
  recorderType: MONTE
  ffmpegPath:
  watermarkStatus: false
```
Create a test class as follows
```java
public class VideoTest {
    @Test
    public void recordVideo() {
        Recorder recorder = RecorderFactory.getRecorder(RecorderType.MONTE);
        recorder.start();
        Await.until(5);
        File file = recorder.stopAndSave("test");
        Assert.assertTrue(file.getAbsolutePath().contains("mp4"));
    }
}
```