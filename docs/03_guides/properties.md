---
id: properties
title: Selcukes Properties
sidebar_position: 8
---

## Runtime Properties

The below selcukes runtime properties provides flexibility to override default values by updating `System.Property`.

```properties
selcukes.excel.runner=  # true or false. default: true
selcukes.excel.suiteName=     # Name of Sheet in Excel Suite File
selcukes.excel.suiteFile=       # Excel File path used as excel runner
selcukes.reports.emailReport=      # true or false. default: true.
selcukes.features=              # comma separated paths to feature files. example: path/to/example.feature, path/to/other.feature
selcukes.tags=           # tag expression. example: @smoke and not @slow
selcukes.glue=                  # comma separated package names. example: com.example.glue
selcukes.plugin=                # comma separated plugin strings. example: pretty, json:path/to/report.json
selcukes.reports.path=        # path/target
selcukes.reports.timestamp=     # true or false. default: false
```

## Logger Properties

```properties title="selcukes-logback.yaml"
# To add the FileHandler, use the following line.
handlers: java.util.logging.FileHandler, java.util.logging.ConsoleHandler

#.level: INFO
.level: INFO

# For example, set the io.github.selcukes.core logger to only log SEVERE
io.github.selcukes.level: ALL
io.github.selcukes.handler: java.util.logging.ConsoleHandler

# Default file output is in user's home directory.
java.util.logging.FileHandler.pattern: build/selcukes.log
java.util.logging.FileHandler.limit: 50000
java.util.logging.FileHandler.count: 1
java.util.logging.FileHandler.formatter: io.github.selcukes.commons.logging.SelcukesLoggerFormatter
java.util.logging.FileHandler.level: FINE

# Limit the message that are printed on the console to INFO and above.
java.util.logging.ConsoleHandler.level: FINE
#java.util.logging.ConsoleHandler.formatter : java.util.logging.SimpleFormatter
java.util.logging.ConsoleHandler.formatter: io.github.selcukes.commons.logging.SelcukesColorFormatter
```
