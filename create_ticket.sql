create table tickets(
id SERIAL PRIMARY KEY,
flight_id INT UNIQUE,
FOREIGN KEY (flight_id) REFERENCES flights(id),
customer_id INT UNIQUE,
FOREIGN KEY (customer_id) REFERENCES customers(id)
)