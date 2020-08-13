- Tried the tool: https://rome.tools/

```sh
# CLI install
$ npm i -g rome

# initialize
$ rome init

# check
$ rome check src/
$ rome check src/ --watch
$ rome check src/ --apply
$ rome check src/ --format-only
$ rome check src/ --review

# bundle (experimental)
$ rome bundle src/entry.ts dist

# compile (experimental)
$ rome compile src/entry.ts

# parse (experimental)
$ rome parse src/entry.ts

# resolve (experimental)
$ rome resolve src/entry.ts

# analyzeDependencies (experimental)
$ rome analyzeDependencies src/entry.ts
```
