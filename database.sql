--DB_NAME = calculator_live

CREATE TABLE "submissions" (
  "id" SERIAL PRIMARY KEY,
  "x" INT,
  "operator" VARCHAR (1),
  "y" INT,
  "date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM "submissions" 
ORDER BY "date" DESC 
LIMIT 10;