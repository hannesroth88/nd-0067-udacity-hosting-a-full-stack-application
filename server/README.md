# Getting started
Backend App for the udacity nanodegree.

## First Steps

## Installation
use `npm install` to install all required 

### .env File
create a .env file with the following Parameters:

```
RDS_USERNAME=xyz // Postgres Username
RDS_PASSWORD=xyz // Postgres Password
RDS_HOSTNAME=xyz.com// Postgres Hostname
RDS_PORT=1234 // Postgres Port default 5432
RDS_DB_NAME=xyz // Database Name
PORT=4200 // Express Server Port default 8080
NODE_ENV=xyz // App Environment PROD/DEV
```

### Database
create a Postgres Database. 
Install db-migrate following the official documentation at [db-migrate](https://db-migrate.readthedocs.io/en/latest/Getting%20Started/installation/).
Use `db-migrate up` to create the necessary tables and example rows.

## Available Scripts

In the project directory, you can run:

### `npm run start`
Runs the app and starts an express server under the default port: 8080 or your specified Port in the Environment. 
Open `http://localhost:PORT` to view it in the browser.


### `npm run test`
Runs tests using Jasmine. For the purpose of this lesson only dummy tests are executed.

### `npm run build`
Builds the project using tsc into the /build folder

### `npm run prettier`
Formats your code using prettier

### `npm run lint`
checks the typescript files with eslint