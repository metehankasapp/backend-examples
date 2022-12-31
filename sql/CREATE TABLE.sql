--CREATE TABLE <table_name>(
--	<column_name><data_type> <constraint>,
--	...
--	<column_name><data_type> <constraint>,
--)


--CREATE TABLE author(
--	id SERIAL PRIMARY KEY,
--	first_name VARCHAR(50) NOT NULL,
--	last_name VARCHAR(50) NOT NULL,
--	email VARCHAR(100),
--	birthday DATE
--)


--INSERT INTO author(first_name,last_name,email,birthday)
	--VALUES('METEHAN','KASAP','mete@gmail.com','2000.10.25')



--CREATE TABLE author2 (LIKE author)
	
	

INSERT INTO author2
SELECT * FROM author
WHERE first_name='METEHAN'



DROP TABLE IF EXIST author4
	
	
	
	
	