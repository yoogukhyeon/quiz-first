import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: process.env.DB_HOST,
    port: 3306,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
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
