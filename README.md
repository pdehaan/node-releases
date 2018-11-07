# node-releases

Scrape the Node.js releases page for fun and profit.

If you only want a subset of the fields from nodejs.org, you can use [**jq**](https://stedolan.github.io/jq/):

```sh
$ npx pdehaan/node-releases | jq '[.[] | {node: .version, npm: .npm} ]'
```
