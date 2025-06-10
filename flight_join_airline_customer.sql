SELECT 
f.id AS flights_id,
a.name AS airline_name,
c1.name AS origin_country,
c2.name AS destination_country, 
f.departure_time,
f.landing_time,
f.remaining_tickets
FROM
flights f
JOIN airlines a ON f.airline_id = a.id
JOIN countries c1 ON f.origin_country_id= c1.id
JOIN countries c2 ON f.destination_country_id= c2.id;