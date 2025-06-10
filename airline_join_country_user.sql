SELECT
a.id AS airline_id,
c.name AS countries_name,
u.username AS username,
a.name
FROM
airlines a
JOIN countries c ON a.country_id=c.id
JOIN users u ON a.user_id=u.id;
