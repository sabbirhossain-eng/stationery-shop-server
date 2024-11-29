# Stationery Shop Application

A simple Express.js application developed with TypeScript that integrates MongoDB (using Mongoose) to manage a stationery shop. The application supports CRUD operations for stationery products and order management while ensuring data integrity using Mongoose schema validation.

## Features

- **Stationery Product Management:**
  - Add, update, retrieve, and delete stationery products.
  - Filter products by name, brand, or category using query parameters.
  - Enum-based category validation for products.
- **Order Management:**
  - Place orders with inventory management (auto-update stock and handle insufficient stock errors).
  - Calculate revenue from all orders using MongoDB aggregation.
- **Error Handling:**
  - Consistent error response structure with detailed validation errors and stack traces.

## Technologies Used

- **Backend Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB (with Mongoose for schema validation and data operations)
- **Environment Management:** dotenv

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/stationery-shop.git
   cd stationery-shop
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`.

## API Endpoints

### API Overview

| API Endpoint                | Method | Description                                         |
|-----------------------------|--------|-----------------------------------------------------|
| `/api/products`             | POST   | Create a new stationery product.                   |
| `/api/products`             | GET    | Retrieve all products with optional search filters.|
| `/api/products/:productId`  | GET    | Retrieve details of a specific product by ID.      |
| `/api/products/:productId`  | PUT    | Update an existing product.                        |
| `/api/products/:productId`  | DELETE | Delete a product by ID.                            |
| `/api/orders`               | POST   | Place a new order.                                 |
| `/api/orders/revenue`       | GET    | Calculate total revenue from all orders.

```

## Scripts

- `npm run dev`: Start the development server with live reloading.
- `npm run build`: Compile TypeScript files.
- `npm start`: Start the production server.

```

```
## Folder Structure

stationery-shop/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.ts
│   ├── server.ts
├── .env
├── package.json
├── tsconfig.json
├── README.md

```

## Future Enhancements

- Add user authentication and authorization.
- Implement additional filtering and pagination for product queries.
- Build a frontend to interact with the API.



---

Feel free to contribute by submitting issues or pull requests!
