# Address-book-strv

[![Build Status](https://www.travis-ci.com/mekzy-o/address-book-srtv.svg?branch=develop)](https://www.travis-ci.com/mekzy-o/address-book-srtv)
[![Code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)
[![Maintainability](https://api.codeclimate.com/v1/badges/b4a7edb137a48a807cd9/maintainability)](https://codeclimate.com/github/mekzy-o/address-book-srtv/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b4a7edb137a48a807cd9/test_coverage)](https://codeclimate.com/github/mekzy-o/address-book-srtv/test_coverage)
[![Coverage Status](https://coveralls.io/repos/github/mekzy-o/address-book-srtv/badge.svg?branch=develop)](https://coveralls.io/github/mekzy-o/address-book-srtv?branch=develop)

## Table of Contents

- [Introduction](#introduction)
- [API](#api)
- [API Documentation](#api-documentation)
- [Technologies](#technologies)
- [Installing](#installing)
- [Working Routes](#working-routes)
- [License](#license)

# Introduction

Backend coding challenge for STRV

### **Style guide**

[Airbnb ](https://github.com/airbnb/javascript)(Javascript style guide)

# API

The API is currently in version 1 (v1) and is hosted at https://address-book-strv.herokuapp.com/api

# API Documentation

The API endpoints are documented using swagger.json and can be accessed at [API-Docs](https://address-book-strv.herokuapp.com/api/docs)


## Required Features

- Users can login.
- Users can signup.
- Users can add contact to firebase

# Technologies

- **NodeJs**: a JavaScript runtime built on Chrome's V8 JavaScript engine
- **Express**: a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
- **PostgreSQL**:  a powerful, open source object-relational database system
- **Sequelize**: a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
- **Mocha**: a feature-rich JavaScript test framework running on Node. js and in the browser, making asynchronous testing simple and fun.
- **Chai**:  a BDD / TDD assertion library for [node](http://nodejs.org) and the browser that can be delightfully paired with any javascript    testing framework
- **ESLint**: a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs
- **Travis CI** (continuous integration): a hosted continuous integration service used to build and test software projects hosted on GitHub and Bitbucket
- **Swagger**: an Interface Description Language for describing RESTful APIs expressed using JSON

# Installing

#### _Prerequisites_

Ensure you have **NodeJS** installed by entering `node -v` on your terminal
If you don't have **NodeJS** installed, go to the [NodeJS Website](http://nodejs.org), and follow the download instructions

To install this app

`git clone https://github.com/mekzy-o/address-book-srtv.git`

And install the required dependencies

`npm install`

Run server

`npm run start:dev`

Server listens on port `5000`

## Running the tests

To run test cases

`npm run test`

# Working Routes

## _API Endpoints_

| Endpoint                                                 |                       Functionality                        | HTTP method |
| -------------------------------------------------------- | :--------------------------------------------------------: | ----------: |
| /api/auth/signup                                         |                    Signup a User                  |         POST|
| /api/auth/signin                            |                 Login a User                 |        POST|
| /api/firebase/contacts    |  Add a contact details to firbebase   |         POST |
| /api/docs   |  Gets the Swagger API Documentation  |         GET |

## License :boom:

This project is under the MIT LICENSE
