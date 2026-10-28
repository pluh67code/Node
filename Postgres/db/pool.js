import {Pool} from "pg";

// All of the following properties should be read from environment variables
// They are hardcoded for simplicity
const pool = new Pool({connectionString: process.env.DATABASE_URL});

export default pool;