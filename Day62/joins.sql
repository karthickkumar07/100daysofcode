#Inner
SELECT table1.column1, table2.column2...
FROM table1
    INNER JOIN table2
    ON table1.common_field = table2.common_field;

#Full
SELECT table1.column1, table2.column2...
FROM table1
    FULL JOIN table2
    ON table1.common_field = table2.common_field;

#Left
SELECT table1.column1, table2.column2...
FROM table1
    LEFT JOIN table2
    ON table1.common_field = table2.common_field;

#Right
SELECT table1.column1, table2.column2...
FROM table1
    RIGHT JOIN table2
    ON table1.common_field = table2.common_field;