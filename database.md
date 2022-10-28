### I'm assuming you already have a Postgres DB running

## Create user

CREATE ROLE me WITH LOGIN PASSWORD '12345678';

ALTER ROLE me CREATEDB;

ALTER ROLE me CREATEDB;

\du

\q

## Login

psql -d postgres -U $USER

## Create and populate DB

CREATE DATABASE api;

\list

\c api

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

## Add data

INSERT INTO users (name, email)
  VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');

SELECT * FROM users;

## THIS IS THE RESULT:

 id |  name  |       email        
----+--------+--------------------
  1 | Jerry  | jerry@example.com
  2 | George | george@example.com