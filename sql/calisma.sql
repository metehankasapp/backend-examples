--SELECT İSTENİLEN BİR ŞEYİ SEÇMEYE YARAR.
--SELECT column1 from table1;
--SELECT title,description from film
--SELECT * from film
--SELECT first_name,last_name from actor


--WHERE FİLTRELEMEYE YARAR

-- aşağıdaki sadece ücretleri 13 dolar olanları getirir.
--SELECT * FROM film WHERE replacement_cost = 12.99
--SELECT * FROM film WHERE rental_rate = 0.99


--SELECT * FROM  actor WHERE first_name = 'Penelope';


--COMPARİSON OPERATOR ( KARŞILŞATIRMA OPERATORLERİ)(<,>,>=,<=,=,!=)

--SELECT * FROM film WHERE length >90
--SELECT * FROM film WHERE rental_rate <1
--SELECT * FROM film WHERE rental_rate !=4.99


--MANTIKSAL OPARETORLER(AND,OR)

--SELECT first_name,last_name FROM actor
--WHERE first_name = 'Penelope' AND last_name = 'Guiness';

--SELECT * FROM film
--WHERE rental_rate = 4.99 AND length > 90 AND replacement_cost > 20;




--BETWEEN IN(daha kısa olduğu için kullanılır.)

--SELECT title,length FROM film
--WHERE length>= 90 AND length <= 120;

--SELECT title,length FROM film
--WHERE length BETWEEN 90 AND 120;

--SELECT rental_rate,replacement_cost FROM film
--WHERE (rental_rate BETWEEN 2 AND 4) AND (replacement_cost BETWEEN 10 AND 20);

--uzunluğu 40,50,60 dakika olan filmleri getirir.
--SELECT * FROM film
--WHERE length IN (40,50,60);

--değişitirme ücreti  10.99,12.99,16.99 olmayanları getirir.
--SELECT * FROM film
--WHERE replacement_cost NOT IN (10.99,12.99,16.99 );






-- LIKE & ILIKE   (LIKE =  ~~ , ILIKE =  ~~*)


-- aşağıdaki fonksiyon ise customer isminin ilk iki harfi Ma olsun ama devamında ne olursa olsun
--SELECT * from customer 
--WHERE first_name LIKE  'Ma%'


--aşağıdaki ise tam tersidir.
--SELECT * from customer 
--WHERE first_name NOT LIKE  'Ma%'


--aşağıdaki fonksyion ise ilk harfi m olsun son harfi y olsun arada karakterler olabilir.
--SELECT * from customer 
--WHERE first_name LIKE  'M%y'


-- ILIKE ise büyük küçük harf duyarlılığı olmaz ve hem küçük a hem büyük a ile başlayanları getirir.
--SELECT * from customer 
--WHERE first_name ILIKE  'a%'


-- aşağıda kullandığımız '_' ise tek bir karakter için geçerlidir.(JEAN,JOAN,JUAN)
--SELECT * from customer 
--WHERE first_name  ~~*  'j_an'





--DISTINCT & COUNT

--DISTINCT fonksyionu bize benzersiz verileri dönderir.
--SELECT DISTINCT rental_rate FROM film;
--SELECT DISTINCT replacement_cost FROM film


--COUNT FONKSYİONU İSE kaç tane istenilenden varsa onu sayar.
SELECT COUNT(*) from actor
WHERE first_name = 'Penelope';


SELECT COUNT(*) from actor
WHERE first_name LIKE 'A%';


SELECT COUNT(DISTINCT length) from film



