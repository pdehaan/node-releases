# node-releases

Scrape the Node.js releases page for fun and profit.

## Usage:

```sh
$ npx pdehaan/node-releases
```

### Output:

```js
[
  {"binary":"Node.js", "version":"11.1.0", "v8":"7.0.276.32", "date":"2018-10-30T00:00:00.000Z", "npm":"6.4.1", "node_module_version":"67"},
  {"binary":"Node.js", "version":"11.0.0", "v8":"7.0.276.28", "date":"2018-10-23T00:00:00.000Z", "npm":"6.4.1", "node_module_version":"67"},
  ...
]
```

**NOTE:** If you only want a subset of the fields from nodejs.org, you can use [**jq**](https://stedolan.github.io/jq/):

```sh
$ npx pdehaan/node-releases | jq '[.[] | {node: .version, npm: .npm} ]'

[
  { "node": "11.1.0", "npm": "6.4.1" },
  { "node": "11.0.0", "npm": "6.4.1" },
  { "node": "10.13.0", "npm": "6.4.1" },
  ...
]
```
