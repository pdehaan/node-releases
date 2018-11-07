const cheerio = require("cheerio");
const got = require("got").get;

const RELEASES_URL = process.env.RELEASES_URL || require("./package.json").homepage;

module.exports = async (uri = RELEASES_URL) => {
  const {body} = await got(uri);
  const $ = cheerio.load(body);

  const res = [];
  const releases = $("table.download-table tbody tr");

  $(releases).each((i, tr) => {
    const row = {};
    $(tr).children("td[data-label]")
      .each((j, td) => {
        const key = td.attribs["data-label"].toLowerCase();
        const value = $(td).text();

        switch (key) {
          case "date":
            row.date = new Date(value);
            break;
          case "lts":
            row.lts = orUndefined(value);
            break;
          case "node_module_version":
            row.node_module_version = orUndefined(value);
            break;
          case "npm":
            row.npm = orUndefined(value);
            break;
          case "version": {
            const [binary, version] = value.split(" ");
            row.binary = binary;
            row.version = version;
          }
          case "v8":
            row.v8 = orUndefined(value);
            break;
          default:
            console.info(`Unknown token: ${key}`);
        }
      });
    res.push(row);
  });
  return res;
};

function orUndefined(value) {
  return value || undefined;
}
