/*

DB = organized collection of structured information / data, that can be easily accessed, managed
and updated. Typically managed by a Database Management System which allows to interact with data,
perform queries and maintain data's integrity.

DB NORMALIZATION = process of organizing data in a relational database to reduce redundancy
and improve data integrity. The goal is to store each piece of data only once with relationships
clearly defined.
=> efficient, well-structured data; integrity; no redundancy
        usually up to 5 normal forms
        => done by dividing tables into smaller tables

DB DENORMALIZATION = purposely adding redundancy to increase performance in certain situations.
this is done when read performance more important than storage efficiency, like for data warehouses.
- data is duplicated
- better query performance, less nested queries needed
    => performance improvement, but has duplication

NoSQL
- non-relational; dynamic schemas for unstructured (semi-structured) data
- horizontally scalable
- document based (BSON), or key-value, graph or wide-column stores
- suitable for responsive, heavy-usage apps
- data can remain in its native format and be ingested into a NoSQL db
- can support SQL-like query language, but rely on more technologies
- unstructured data: photos, audio files, videos etc
- can be stored in the same collection
- can add fields as you go, non-rigid
- can add more nodes and supports distributed schemas (more computers linked via network)

SQL 
- structured query language = programming language for storing / processing information
in a relational database
- it integrates well with other programming languages
- a RELATIONAL DATABASE has as basic element - TABLES
- flow : statement => (parser) => relational engine => storage engine
- SQL injection = cyberattack by doing CRUD operations on data
- good for transactions / analytical apps
- structured, uniform data organized in a predefined format
- relationship between 2 tables is formed using a FOREIGN KEY
- limits to types of data structures that can be stored
- (ACID) atomicity, consistency, isolation, durability
- transaction managment
- schema rigidity
- scales vertically

- PRIMARY KEY = column or combinataion of columns that uniquely identifies each row in a table
- FOREIGN KEY = column / set of columns that establishes a relationship between data in two tables. It does so by
referencing the primary key of another table
    => one - to - many relationship
- INDEX = a data structure that allows quick lookup of rows based on values in one/moer columns
        - facilitates speedy retrieval on a table
            e.g. CREATE INDEX idx_employee_lastname ON Employees(Firstname, Lastname)
        - too many indexes can slow down searches, also eat up space
- TRANSACTION = sequence of one / more operations EXECUTED AS A SINGLE UNIT OF WORK. It ensures that all operations
are completed successfully or none at all, to preserve the integrity of the database
    => ACID = atomicity => treated as a single action
            = consistency => ensures the db transitions from one state to another, respecting rules,
                            constraints and data integrity
            = isolation => transactions are isolated from one another
            = durability => once a transaction is committed, changes are permanent

            BEGIN TRANSACTION // COMMIT (operations) // ROLLBACK


OPERATIONS
    => CREATE TABLE table (
            OrderID     INT     PRIMARY KEY,
            OrderDate   DATE,
            CustomerId  INT,
            FOREIGN KEY (CustomerId)    REFERENCES Customers(CustomerID)
        )

    => SELECT first_name, last_name 
            FROM employees;

    => INSERT INTO table_name (col1, col2)
            VALUES (val1, val2);
    
    => UPDATE table_name
            SET column1 = value1, col2 = val2
            WHERE condition;

    => DELETE FROM employees
            WHERE first_name = 'John' AND age = 30;

       DELETE FROM employees => deletes all the rows

    => ALTER TABLE employees
            ADD email VARCHAR(50);


    => DROP TABLE employees;

    => TRUNCATE TABLE employees; (this resets the table completely, does not log the operations, unlike DELETE table)


- SOME TERMS 
            => UNION ALL: (select ....)
                            UNION ALL - 
                          (select..)

            => AS : select (count(city) - count(distinct city)) AS Diff_city

            => ORDER BY : ..... ORDER BY left(name, 3) ASC  (first 3 characters of name)

            => ROUND : select ROUND(AVG(population), 0) ...   0 = round to which decimal

            => HAVING : select ... FROM...WHERE bonus > 2000 GROUP BY employee HAVING sum(income) > 5000

            => query order : WHERE ..... GROUP BY ...... HAVING

            => <> : different than

            => USING : join table a on table using (common_id)

            => CREATE VIEW AS : create view as select * from...

            => LIMIT : 
            => OFFSET : SELECT column_name FROM table
                        LIMIT nr_of_rows OFFSET nr_of_rows_to_skip;
        
            => MIN / MAX / AVG / NOT / IS NULL / BETWEEN / IN, NOT IN () / DISTINCT /
              LIKE / NOT LIKE '_abc%' , '[abc]%' , '[a-f]', '[!a-f]' 

            => WITH : WITH high_salary AS (
                SELECT name, salary
                FROM employees
                WHERE salary > 100000
                        ),
                low_salary AS (
                SELECT name, salary
                FROM employees
                WHERE salary < 30000
                        )
                SELECT * FROM high_salary
                UNION
                SELECT * FROM low_salary;


JOINS
    INNER JOIN => only rows that have matching values

    LEFT JOIN => all left + matching right / null

    RIGHT JOIN => all right + matching left / null

    FULL JOIN => all rows when there is a match in either table, otherwise null

    CROSS JOIN => cartesian; every possible combo

    SELF JOIN => inner join with itself

    NATURAL JOIN => no explicit ON condition
*/