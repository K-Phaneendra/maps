
import express from "express";
import { dbQuery } from "../db-connect.js";

const router = express.Router();

router.get("/fetch_batch_filenames", async function (req, res) {
    const dbResponse = await dbQuery('SELECT DISTINCT filename FROM batch_numbers WHERE filename IS NOT NULL')
    res.send(dbResponse);
});
router.get("/fetch_batch_status", async function (req, res) {
    const sqlQuery = `SELECT 
    COUNT(CASE WHEN bn.is_done IS NOT TRUE THEN 1 END) AS 'un-delivered',
    COUNT(CASE WHEN bn.is_done IS TRUE THEN 1 END) AS 'delivered'
FROM 
    batch_numbers bn;`
    const dbResponse = await dbQuery(sqlQuery)
    res.send(dbResponse);
});
router.get("/fetch_batch_numbers", async function (req, res) {
    const dbResponse = await dbQuery('SELECT batch_number, is_done FROM batch_numbers WHERE batch_number IS NOT NULL')
    res.send(dbResponse);
});
router.post("/mark_batch_number_as_delivered", async function (req, res) {
    const body = req.body
    const sqlQuery = `UPDATE batch_numbers SET is_done = 1 WHERE batch_number = '${body.batch_number}';`
    const dbResponse = await dbQuery(sqlQuery)
    res.send(dbResponse);
});
// router.get("/fetch_batch_numbers", async function (req, res) {
//     const dbResponse = await dbQuery('SELECT * FROM batch_numbers')
//     res.send(dbResponse);
// });

export default router;
