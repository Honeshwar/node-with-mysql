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

# step 7

- enable "strictPropertyInitialization": false in type script so it cannot give initialization error in entities.
- create user entity / model
- then synchronize: true, //automatically generate on launch of seserver schema create in db , tables created based on schema/entities/model that we pass it it
  entities: [User],//"../entities/\*{.ts,.js}"

```

import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {//by default it take class name in lower case as table name
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

 simple model , OOPS user class without functionality = schema
 export class User {
   properties of user object
   id: number;
   name: string;
 }

 note ORM(Object relation mapper) map OOPS to query of database  and driver (myql,mongodb) add this query to DBMS software and run and we get output

 @Entity() = decorator,it tell to orm to convert/transform class/schema to db table

 @Entity() Marks your model as an entity. Entity is a class which is transformed into a database table. You can specify the table name in the entity:
/**
 *
 * @Entity("users") to set name of table
 *
 * to set by default things in db and table
 * @Entity({
    name: "users",
    engine: "MyISAM",
    database: "example_dev",
    schema: "schema_with_best_tables",
    synchronize: false,
    orderBy: {
        name: "ASC",
        id: "DESC",
    },
})
 */


```

# step 8

```
- ORM create a repository when it call an entity class to transform/create table in database,
- when create datasource ,it having a function called source.getRepository(entitycalls add),
- and able to do CRUD operations

```
