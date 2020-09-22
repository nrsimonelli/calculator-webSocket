const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  const queryString = `
    SELECT * FROM "submissions" 
    ORDER BY "date" DESC 
    LIMIT 10;`;

  pool 
    .query(queryString)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error with select, calc router', error);
      res.sendStatus(500);
    })
  });
router.post('/', (req,res)=> {
  const entry = req.body;
  const queryString = `
    INSERT INTO "submissions" ("x","operator","y","answer")
    VALUES ($1, $2, $3, $4);`;
  console.log('req.body', entry)
    pool
      .query(queryString, [entry.x, entry.operator, entry.y, entry.answer])
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error)=> {
        console.log('error in post');
        res.sendStatus(500);
      });
});

module.exports = router;