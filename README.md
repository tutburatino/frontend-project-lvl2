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
$ npm install -g gendifff
```
[![asciicast](https://asciinema.org/a/304587.svg)](https://asciinema.org/a/304587)


### Compare JSON files
```
$ gendiff config1.json config2.json
```
[![asciicast](https://asciinema.org/a/304592.svg)](https://asciinema.org/a/304592)


### Compare YAML/YML files
```
$ gendiff config1.yaml config2.yaml
```
[![asciicast](https://asciinema.org/a/304597.svg)](https://asciinema.org/a/304597)


### Compare INI files
```
$ gendiff config1.ini config2.ini
```
[![asciicast](https://asciinema.org/a/304624.svg)](https://asciinema.org/a/304624)


### Compare nested files
```
$ gendiff configTree1 configTree2
```
[![asciicast](https://asciinema.org/a/304609.svg)](https://asciinema.org/a/304609)


### Compare files in plain format
```
$ gendiff --format plain config1 config2
```
[![asciicast](https://asciinema.org/a/304618.svg)](https://asciinema.org/a/304618)


### Compare files in json format
```
$ gendiff --format json config1 config2
```
[![asciicast](https://asciinema.org/a/304620.svg)](https://asciinema.org/a/304620)