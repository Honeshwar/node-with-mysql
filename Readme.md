# step 1

- npm init -y
- npm i express
- npm i --save-dev typescript ts-node nodemon @types/express typeorm

# step 2

- script add in package.json for dev,production,typscript compile to js

- tsc --init, ts,config file Created a new tsconfig.json with

# step 3

- rootDir, and outDir change in ts config , tsc(typscript compiler) pick file from root and compile to js and add to outDir
- experimentalDecorators": true, "emitDecoratorMetadata": true, enable because so we can use typeorm , otherwise it dont allow

# step 4

- "start:dev":"nodemon ./scr/index.ts", //for dev we use ts and nodemon to automatically restart server on file save
- "build": "tsc -p .", // compile all (-p ,.=curr directory all) ts to js and add to ./dist folder
- "start:prod ": "node ./dist/index.js" // production js

"start:dev": "nodemon ./scr/index.ts",
"build": "tsc -p .",
"start:prod ": "node ./dist/index.js"

# step 5

- type
  When set to "module", the type field allows a package to specify all .js files within are ES modules. If the "type" field is omitted or set to "commonjs", all .js files are treated as CommonJS.

"type": "commonjs",
"type": "module",//we use this because use ES6 features or above / ts use ES6\,..> features

# step 6

- define env for dev for mysql that we use in typeorm to connect to mysql
  ```MYSQL_HOST=127.0.0.1
  MYSQL_DATABASE=learning
  MYSQL_PORT=3306
  MYSQL_USER=roo
  MYSQL_PASSWORD=*****
  ```
