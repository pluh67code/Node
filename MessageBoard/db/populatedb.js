import {Client} from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 20 ),
  message VARCHAR ( 255 )
);`

async function main() {
  console.log("seeding...");
  const client = new Client({
  connectionString: process.argv[2] ?? process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
