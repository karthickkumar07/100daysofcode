CREATE TABLE table_name
(
    column1 datatype,
    column2 datatype,
    column3 datatype,

    columnN datatype,
    PRIMARY KEY( one
    || more columns )
);

    INSERT INTO table_name
        ( column1, column2....columnN)
    VALUES
        ( value1, value2....valueN);


UPDATE table_name
SET column1 = value1, column2 = value2....columnN =valueN [ WHERE  CONDITION ];

DELETE FROM table_name WHERE  {CONDITION};
