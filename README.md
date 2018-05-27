[![CircleCI](https://img.shields.io/circleci/project/github/andyrichardson/cards.svg)](https://circleci.com/gh/andyrichardson/cards/)
[![Coverage Status](https://coveralls.io/repos/github/andyrichardson/cards/badge.svg?branch=18-display-code-coverage)](https://coveralls.io/github/andyrichardson/cards?branch=18-display-code-coverage)
[![Issues](https://img.shields.io/github/issues/andyrichardson/cards.svg)](https://circleci.com/gh/andyrichardson/cards/)

# Cards

## Requirements

The application can be run in one of two environments - Docker and Node.

#### Docker environment

* Docker Compose v1.21.2 (or later)
* Docker v18.03.1-ce (or later)

#### Node environment

* Node.js v9.11.1 (or later)
* Npm v6.1.0 (or later)

<br>

## Preparation

Install dependencies

    npm install

<br>

## Usage

### Production

**Docker**

    docker-compose up -d prod

**Node**

    npm run build && npm start

### Development

**Docker**

    docker-compose up dev

**Node**

    npm run dev
