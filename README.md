# Stock

This is a project developed for studying SOLID principles with TypeScript, Express, and Prisma.

## API Endpoints

- `GET /products`: Returns all available products in the stock.
- `POST /products/:id/buy`: Allows buying a specific product by its ID. Receives `{ "amount": Number }`.
- `POST /products/:id/sell`: Allows selling a specific product by its ID. Receives `{ "amount": Number }`.
- `POST /products/create`: Allows creating a new product in the stock. Receives `{ "name": String, "price": Number }`.

## Prerequisites

Make sure you have Node.js and npm installed on your system.

## Project Setup

1. Clone this repository to your local machine.
2. Rename the `.env.example` file to `.env`.
3. Install project dependencies by running the command `npm install`.
4. Start the server with the command `npm start`.

## Database Configuration

Ensure to properly configure your connection to the Prisma database. Set up your credentials in the `.env` file and run database migrations with the command `npx prisma migrate dev`.
