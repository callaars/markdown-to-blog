const markdown = require("markdown").markdown;
const path = require('path')
const dayjs = require("dayjs");
const fs = require("fs");

const filename = process.argv.pop();
const template = fs.readFileSync("./template.html").toString();

const data = fs
  .readFileSync(filename)
  .toString()
  .split("\n");

const title = data[0].substr(1, Infinity).trim();

const content = markdown
  .toHTML(data.slice(6, Infinity).join("\n"))
  .replace(/<code>/g, '<code class="js">')
  .replace(/<a href/g, '<a target="_blank" href');

const date = dayjs(data[3].replace(/last edited:/i, "").trim()).format(
  "MMMM YYYY"
);

const directory = path.join('output', `${date} ${title}`.toLowerCase().replace(/ /g, '-'))

const post = template
  .replace(/%title%/g, title)
  .replace(/%date%/g, date)
  .replace(/%content%/g, content);

try {
  fs.mkdirSync(directory)
} catch (e) {
  if (e.code !== "EEXIST") {
    console.error(e);
    process.exit(-1)
  }
}

fs.writeFileSync(path.join(directory, 'index.html'), post)
