

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
## Migrations 

```bash
# Creating a New Migration File
$ pnpm run migration:create --name=MigrationName

# Generating a New Migration
$ pnpm run migration:generate --name=MigrationName

# Running Pending Migrations
$ pnpm run migration:run

# Reverting the Last Migration
$ pnpm run migration:revert

# Showing Migration Status
$ pnpm run migration:show
```

Generating a New Migration <br>
 <p>This command automatically generates a new migration file based on the changes detected in your entities. TypeORM will compare your current entity definitions against the database schema and generate the necessary SQL statements to bring the database schema in sync with your entities.</p><br>
 
 Creating a New Migration File <br>
 <p>This command creates a new, empty migration file. You will need to manually define the SQL statements or TypeORM schema changes inside this file.</p><br>

.env files variables <br>
POSTGRES_HOST <br>
POSTGRES_PORT<br>
POSTGRES_USER <br>
POSTGRES_PASSWORD<br>
POSTGRES_DATABASE<br>
