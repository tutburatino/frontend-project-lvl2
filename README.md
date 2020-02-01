# Difference generator

[![Maintainability](https://api.codeclimate.com/v1/badges/bb58df4ceda72cf38e59/maintainability)](https://codeclimate.com/github/tutburatino/frontend-project-lvl2/maintainability) [![Build Status](https://travis-ci.org/tutburatino/frontend-project-lvl2.svg?branch=master)](https://travis-ci.org/tutburatino/frontend-project-lvl2)

Difference generator is a CLI utility compares two configuration files.

**Capabillities:**
  - use multiple formats
  - generate reports in different formats: text, pretty, json

Example:
```
$ gendiff --format plain first-config.ini second-config.ini
Setting "common.setting2" deleted.
Setting "common.setting4" added with value "blah blah".
Setting "group1.baz" changed from "bas" to "bars".
Section "group2" deleted.
```


### Installation

```
$ npm install -g gendif
```

[![asciicast](https://asciinema.org/a/297132.svg)](https://asciinema.org/a/297132)
