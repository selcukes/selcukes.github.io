---
title:  Selenoid Grid Test
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json"
values={[
{label: 'browsers.json', value: 'json'}, {label: 'docker-compose.yml', value: 'yml'}
]
}>

<TabItem value="json">

```json 
{
  "firefox": {
    "default": "latest",
    "versions": {
      "latest": {
        "image": "selenoid/vnc_firefox",
        "port": "4444",
        "path": "/wd/hub",
        "tmpfs": {
          "/tmp": "size=512m"
        }
      }
    }
  },
  "chrome": {
    "default": "latest",
    "versions": {
      "latest": {
        "image": "selenoid/vnc_chrome",
        "port": "4444",
        "tmpfs": {
          "/tmp": "size=512m"
        }
      }
    }
  }
}
```

</TabItem>
<TabItem value="yml">

```yaml
version: "3.8"
services:
  selenoid:
    network_mode: bridge
    image: aerokube/selenoid
    container_name: selenoid
    volumes:
      - "PATH_TO_CONFIG_FOLDER:/etc/selenoid"
      - "PATH_TO_VIDEO_FOLDER:/opt/selenoid/video"
      - "PATH_TO_LOGS_FOLDER:/opt/selenoid/logs"
      - "/var/run/docker.sock:/var/run/docker.sock"
    environment:
      - OVERRIDE_VIDEO_OUTPUT_DIR=PATH_TO_VIDEO_FOLDER
    command: ["-conf", "/etc/selenoid/browsers.json", "-video-output-dir", "/opt/selenoid/video", "-log-output-dir", "/opt/selenoid/logs", "-limit", "5"] # change the limit to have more sessions
    ports:
      - "4444:4444"

  selenoid-ui:
    network_mode: bridge
    image: "aerokube/selenoid-ui"
    container_name: selenoid-ui
    links:
      - selenoid
    ports:
      - "8083:8080"
    networks:
      - selenoid
    command: ["--selenoid-uri", "http://selenoid:4444"]

  chrome_89.0:
    network_mode: bridge
    image: "selenoid/vnc_chrome"
    container_name: chrome_vnc
    links:
      - selenoid
      - selenoid-ui
    depends_on:
      - selenoid
      - selenoid-ui
    volumes:
      - "/dev/shm:/dev/shm"

  firefox_87.0:
    network_mode: bridge
    image: "selenoid/vnc_firefox"
    container_name: firefox_latest
    links:
      - selenoid
      - selenoid-ui
    depends_on:
      - selenoid
      - selenoid-ui
    volumes:
      - "/dev/shm:/dev/shm"
```

</TabItem>
</Tabs>
