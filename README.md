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

<script id="asciicast-304587" src="https://asciinema.org/a/304587.js" async></script>


### Compare JSON files

```
$ gendiff config1.json config2.json
```

<script id="asciicast-304592" src="https://asciinema.org/a/304592.js" async></script>


### Compare YAML/YML files

```
$ gendiff config1.yaml config2.yaml
```

<script id="asciicast-304597" src="https://asciinema.org/a/304597.js" async></script>

### Compare INI files

```
$ gendiff config1.yaml config2.yaml
```

<script id="asciicast-304597" src="https://asciinema.org/a/304597.js" async></script>

### Compare nested files

```
$ gendiff configTree1 configTree2
```

<script id="asciicast-304609" src="https://asciinema.org/a/304609.js" async></script>


### Compare files in plain format

```
$ gendiff --format plain config1 config2
```

<script id="asciicast-304618" src="https://asciinema.org/a/304618.js" async></script>


### Compare files in json format

```
$ gendiff --format json config1 config2
```

<script id="asciicast-304620" src="https://asciinema.org/a/304620.js" async></script>