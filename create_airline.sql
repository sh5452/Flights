create table airlines (
id SERIAL PRIMARY KEY,
name VARCHAR (255) NOT NULL,
country_id INT,
FOREIGN KEY(country_id) REFERENCES countries(id),
user_id INT UNIQUE,
FOREIGN KEY(user_id) REFERENCES users(id)

)