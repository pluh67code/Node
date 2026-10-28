#! /usr/bin/env node
import {Client} from "pg";


const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
    const connStr = process.argv[2] ?? process.env.DATABASE_URL;
    console.log("seeding...");
    const client = new Client({
        connectionString: connStr,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
