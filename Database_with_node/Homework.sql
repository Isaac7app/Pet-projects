-- 1. What are the names of countries with population greater than 8 million
SELECT * FROM country WHERE population > '8000000'

--2. What are the names of countries that have “land” in their names ?
SELECT * FROM country WHERE LIKE '%land%'

-- 3. What are the names of the cities with population in between 500,000 and 1 million ?
SELECT * FROM country WHERE population BETWEEN 500000 AND 1000000

--4. What's the name of all the countries on the continent ‘Europe’ ?
SELECT * FROM country WHERE continent = 'europe'