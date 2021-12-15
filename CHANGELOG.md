# @ctx-core/webgl

## 6.0.26

### Patch Changes

- fix: package.json: exports

## 6.0.25

### Patch Changes

- package.json: svelte: ./dist/index.js

## 6.0.24

### Patch Changes

- package.json: - module

## 6.0.23

### Patch Changes

- package.json: - "main": explicitly not support cjs

## 6.0.22

### Patch Changes

- @swc/core: ^1.2.117 -> ^1.2.118

## 6.0.21

### Patch Changes

- @swc/core: ^1.2.116 -> ^1.2.117

## 6.0.20

### Patch Changes

- @swc/core: ^1.2.113 -> ^1.2.116

## 6.0.19

### Patch Changes

- @swc/cli: ^0.1.51 -> ^0.1.52
- @swc/core: ^1.2.111 -> ^1.2.113

## 6.0.18

### Patch Changes

- @swc/core: ^1.2.110 -> ^1.2.111

## 6.0.17

### Patch Changes

- typescript: ^4.4.4 -> ^4.5.2
- @swc/core: ^1.2.108 -> ^1.2.110

## 6.0.16

### Patch Changes

- @swc/core: ^1.2.107 -> ^1.2.108

## 6.0.15

### Patch Changes

- compile using swc

## 6.0.14

### Patch Changes

- typescript: ^4.4.3 -> ^4.4.4

## 6.0.13

### Patch Changes

- typescript: ^4.4.2 -> ^4.4.3

## 6.0.12

### Patch Changes

- typescript: ^4.3.5 -> ^4.4.2

## 6.0.11

### Patch Changes

- fix: "exports": "./package.json": "./package.json"

## 6.0.10

### Patch Changes

- exports: + "package.json": "./package.json"

## 6.0.9

### Patch Changes

- fix: sourceMappingURL: "mapRoot": ""

## 6.0.8

### Patch Changes

- tsconfig.json: "target": "es2019"

## 6.0.7

### Patch Changes

- fix: cjs: load as a Promise

## 6.0.6

### Patch Changes

- "main": "./dist/index.cjs"

## 6.0.5

### Patch Changes

- fix: index.cjs: module.exports = require('./index.js')

## 6.0.4

### Patch Changes

- back to esm module with cjs using esm npm package to load library

## 6.0.3

### Patch Changes

- support cjs & esm: + "exports"

## 6.0.2

### Patch Changes

- fix: "type": "module"

## 6.0.1

### Patch Changes

- 2a6971f80: fix: "type": "module"
- fix: "type": "module"

## 6.0.0

### Major Changes

- "type": "module": module npm type

## 5.0.10

### Patch Changes

- typescript: ^4.3.4 -> ^4.3.5

## 5.0.9

### Patch Changes

- dist directory

## 5.0.8

### Patch Changes

- tsconfig.json: "lib": ["dom", "ESNext"]

## 5.0.7

### Patch Changes

- "prepublishOnly": "npm run clean && npm run compile"

## 5.0.6

### Patch Changes

- fix: deploying \*.js files

## 5.0.5

### Patch Changes

- "prepare": "npm run clean && npm run compile"

## 5.0.4

### Patch Changes

- npm run prepare instead of npm run prepublishOnly

## 5.0.3

### Patch Changes

- fix: npm run clean

## 5.0.2

### Patch Changes

- typescript: ^4.3.3 -> ^4.3.4

## 5.0.1

### Patch Changes

- typescript: ^4.3.2 -> ^4.3.3

## 5.0.0

### Major Changes

- move from dist to src directory

## 4.3.3

### Patch Changes

- version bump: run build

## 4.3.2

### Patch Changes

- fix: build: clean up old build files in dist

## 4.3.1

### Patch Changes

- update dependencies

## 4.3.0

### Minor Changes

- fix tsc build directory issues

## 4.2.1

### Patch Changes

- .gitignore: - \*.js

## 4.2.0

### Minor Changes

- dist,types directory: addressing typescript build issues

## 4.1.3

### Patch Changes

- types: ./src/index.d.ts: address error TS2742 issue

## 4.1.2

### Patch Changes

- .npmignore: + ~

## 4.1.1

### Patch Changes

- fix: target: 2018: nodejs compatability

## 4.1.0

### Minor Changes

- "noImplicitAny": true

## 4.0.10

### Patch Changes

- update dependencies

## 4.0.9

### Patch Changes

- typescript: ^4.2.3 -> ^4.2.4

## 4.0.8

### Patch Changes

- version bump

## 4.0.7

### Patch Changes

- fix: npm publish: https://github.com/npm/cli/issues/2834

## 4.0.6

### Patch Changes

- fix: npm run compile: tsc -b .

## 4.0.5

### Patch Changes

- typescript: ^4.2.2 -> ^4.2.3

## 4.0.4

### Patch Changes

- version bump

## 4.0.3

### Patch Changes

- typescript: ^4.1.5 -> ^4.2.2

## 4.0.2

### Patch Changes

- typescript: ^4.1.4 -> ^4.1.5

## 4.0.1

### Patch Changes

- typescript: ^4.1.3 -> ^4.1.4

## 4.0.0

### Major Changes

- src directory

## 3.1.0

### Minor Changes

- gl_resize as resize\_\_gl

## 3.0.5

### Patch Changes

- - .rush

## 3.0.4

### Patch Changes

- typescript: ^4.1.2 -> ^4.1.3

## 3.0.3

### Patch Changes

- typescript: ^4.0.5 -> ^4.1.2

## 3.0.1

### Patch Changes

- typescript: ^4.0.3 -> ^4.0.5

## 3.0.0

### Major Changes

- Typescript strict checking

## 2.1.34

### Patch Changes

- fix: npm run compile: path to tsc
