SELECT cu.id AS customer_id,
cu.first_name,
cu.last_name, 
cu.address,
cu.phone_no,
cu.credit_card_no,
u.username AS username,
u.password AS passwors,
u.email AS email
FROM
customers cu
JOIN users  u ON cu.user_id = u.id;