# markdown-to-blog

This is a simple super-unsafe script that allows me to use exported Notion-to-markdown pages and convert them to my blog post format.

It uses a markdown file with a very specific layout (see the [test markdown](test-data/test.md)) and converts it into a HTML file.

## How to use

Run with the markdown file you want to convert as the argument to the script.

```
    $ yarn install
    $ node index.js ./test-data/test.md
```

See the test markdown to see the layout. After running it will create (hopefully) a directory + index.html file in the [output](output) directory.

## Change the template

You can change it all you want. It will search for one of the following tags to insert the data:

- `%title%`, this is where the title will be inserted. The first line of the markdown file is used as the title.
- `%date%`, this is where the date is written in the form "Month Year".
- `%content%`, this is where the blog post is written, it is fetched from line 7 and onwards in the markdown file.

## This script is unsafe/stupid/unhelpful/doesn't do/blabla...

Yup, it's an internal tool only and it works perfectly for what I want it to do. 🧠
