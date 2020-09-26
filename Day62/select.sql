#database creation
CREATE DATABASE DatabaseName
USE DatabaseName

#database selection
SELECT column1, column2....columnN
FROM table_name;
SELECT DISTINCT column1, column2....columnN
FROM table_name;

#conditions
SELECT column1, column2....columnN
FROM table_name
WHERE  CONDITION;


#OR
SELECT column1, column2....columnN
FROM table_name
WHERE  CONDITION-1
{AND|OR} CONDITION-2;

#In
SELECT column1, column2....columnN
FROM table_name
WHERE  column_name IN (val-1, val-2,...val-N);

#Between
SELECT column1, column2....columnN
FROM table_name
WHERE  column_name BETWEEN val-1 AND val-2;

#Like
SELECT column1, column2....columnN
FROM table_name
WHERE  column_name LIKE { PATTERN };

#OrderBy
SELECT column1, column2....columnN
FROM table_name
WHERE  CONDITION
ORDER BY column_name
{ASC|DESC};

#GroupBy
SELECT SUM(column_name)
FROM table_name
WHERE  CONDITION
GROUP BY column_name;

#having
SELECT SUM(column_name)
FROM table_name
WHERE  CONDITION
GROUP BY column_name
HAVING (arithematic
function condition);

