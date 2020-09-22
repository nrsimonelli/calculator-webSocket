const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  const query = `
    SELECT * FROM "submissions" 
    ORDER BY "date" DESC 
    LIMIT 10;`;

  pool 
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error with select, calc router', error);
      res.sendStatus(500);
    })
  });

module.exports = router;