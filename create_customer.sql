create table customers(
id SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
address VARCHAR(100) NOT NULL,
phone_no VARCHAR(50) NOT NULL UNIQUE,
credit_card_no VARCHAR(100) NOT NULL UNIQUE,
user_id INT UNIQUE,
FOREIGN KEY (user_id) REFERENCES users(id) 
)