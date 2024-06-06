import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

// simple model , OOPS user class without functionality = schema
// export class User {
//   //properties of user object
//   id: number;
//   name: string;
// }

// note ORM(Object relation mapper) map OOPS to query of database  and driver (myql,mongodb) add this query to DBMS software and run and we get output

// @Entity() = decorator,it tell to orm to convert/transform class/schema to db table

// @Entity() Marks your model as an entity. Entity is a class which is transformed into a database table. You can specify the table name in the entity://
/**
 * 
 * @Entity("users")// to set name of table
 * 
 * //to set by default things in db and table
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
