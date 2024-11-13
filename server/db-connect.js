import { createConnection } from "mysql";
import { constants } from "./constants.js";

var connection = createConnection({
  host: constants.database.host,
  user: constants.database.user,
  password: constants.database.password,
  database: constants.database.dbname,
});

connection.connect(function (err) {
  if (err) {
    connection.end();
    throw err;
  }
  console.log("Database connected successfully!");
});

export const dbQuery = async (query) => {
  const dbResult = await new Promise((resolve, reject) => {
    connection.query(query, function (error, results, fields) {
      if (error) {
        reject(error);
        throw error;
      }
      resolve(results);
    });
  });
  return dbResult;
};

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution, "sample database query executed successfully");
});
