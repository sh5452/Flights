SELECT 
f.remaining_tickets,
cu.first_name,
cu.last_name
FROM tickets t
JOIN flights f ON t.flight_id=f.id
JOIN customers cu ON t.customer_id=cu.id;