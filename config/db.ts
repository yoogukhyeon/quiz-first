import mysql from "serverless-mysql";

console.log("::::::::::::::::");
console.log("::::::::::::::::");
console.log("::::::::::::::::");
console.log("process.env.DB_HOST ::", process.env.DB_HOST);
console.log("::::::::::::::::");
console.log("::::::::::::::::");
const pool = mysql({
  config: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3306,
    database: process.env.DB_DATABASE,
  },
});

export async function mainExcuteQuery({ query, values }: { query: string; values: any[] }) {
  try {
    const results = await pool.query(query, values);
    await pool.end();
    console.log("connected to db...");
    return results;
  } catch (error) {
    console.log("not connected to db...");
    return { error };
  }
}
