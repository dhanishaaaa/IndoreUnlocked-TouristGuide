CREATE DATABASE indore_unlocked;
USE indore_unlocked;

-- CAFES
CREATE TABLE cafes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    area VARCHAR(100),
    rating FLOAT,
    known_for VARCHAR(255),
    opening_hours VARCHAR(100),
    address TEXT,
    image_url TEXT,
    location_link TEXT
);

-- RESTAURANTS
CREATE TABLE restaurant LIKE cafes;

-- TEMPLES
CREATE TABLE temples LIKE cafes;

-- MALLS
CREATE TABLE malls LIKE cafes;

-- STREET FOOD
CREATE TABLE streetfood LIKE cafes;

-- FUN
CREATE TABLE fun LIKE cafes;

-- EXPLORE
CREATE TABLE exploreplaces LIKE cafes;

-- CONTACT FORM
CREATE TABLE contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    message TEXT
);
