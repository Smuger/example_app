docker build --platform=linux/amd64 -t smuger/example_app_backend .
docker push smuger/example_app_backend:latest

// SETUP DB:

psql -h <RDS-ENDPOINT> -p 5432 -U master -d postgres
CREATE ROLE test_user WITH LOGIN PASSWORD 'replace-me-hard-password';
ALTER ROLE test_user CREATEDB;
CREATE DATABASE api;
\q
psql -h <RDS-ENDPOINT> -p 5432 -U test_user -d api
CREATE TABLE users( id SERIAL PRIMARY KEY, name VARCHAR(30), email VARCHAR(30) );
\q