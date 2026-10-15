# Smart Expense Tracker

A full-stack MERN application for managing daily expenses, organizing transactions, and understanding spending patterns through a centralized dashboard and interactive visualizations.

## Overview

Smart Expense Tracker is a web-based expense management application built with MongoDB, Express.js, React, and Node.js. It helps users record and manage expenses, review spending statistics, filter transactions, and visualize financial data.

The project demonstrates full-stack web development concepts, including REST APIs, authentication, database integration, CRUD operations, and responsive UI development.

## Screenshots

<!-- Replace these paths with the actual filenames in your screenshot/ folder. -->
### Dashboard
![Smart Expense Tracker Dashboard](screenshot/Dashboard.png)

### Expense Form
![Add Expense Form](screenshot/Expense form.png)

###  Expense List
![Shows Expense List ](screenshot/Expense list.png)

---

## Features

### Authentication and Security
- User registration and login
- JSON Web Token (JWT)-based authentication
- Password hashing using bcryptjs
- Protected API routes for authenticated users

### Expense Management
- Add, view, edit, and delete expense records
- Organize transactions by category
- Record expense details such as title, amount, date, payment method, and description
- Search and filter expenses, where supported by the application
- Paginated expense listings

### Dashboard and Analytics
- Centralized expense dashboard
- Monthly spending statistics
- Current-month versus previous-month comparisons
- Category-wise spending summaries
- Interactive charts using Recharts
- CSV export for expense records, if enabled in the current build

### User Interface
- React-based component architecture
- Responsive styling with Tailwind CSS
- Client-side navigation using React Router
- API communication using Axios

> Note: Verify optional features such as CSV export, advanced filters, and all analytics before presenting them as implemented features.

## Tech Stack

| Area | Technologies |
|---|---|
| Frontend | React, Vite, Tailwind CSS |
| Routing | React Router DOM |
| API communication | Axios |
| Charts | Recharts |
| Icons | Lucide React |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs |
| Validation | express-validator |
| Configuration | dotenv |
| Version control | Git, GitHub |

## Project Structure

```text
smart-expense-tracker/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── expenseController.js
│   ├── data/
│   │   └── seedData.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── validatorMiddleware.js
│   ├── models/
│   │   ├── Expense.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── expenseRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
├── screenshot/
├── .gitignore
├── package.json
└── README.md
```

*This structure summarizes the existing project layout; filenames may vary slightly by repository version.*

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js and npm
- MongoDB local installation or a MongoDB Atlas account
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Shambhavi05-java/smart-expense-tracker.git
cd smart-expense-tracker
```

### 2. Install Dependencies

From the project root, run:

```bash
npm run install-all
```

If this script is unavailable in your checked-out version, install the dependencies separately:

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3. Configure Environment Variables

Create environment files using the provided example templates.

**Backend — `backend/.env`**

```env
PORT=5000
NODE_ENV=development

MONGO_URI=mongodb://127.0.0.1:27017/expense_tracker

JWT_SECRET=replace_with_a_long_random_secret
JWT_EXPIRES_IN=7d

CLIENT_URL=http://localhost:5173
```

For MongoDB Atlas, replace the local `MONGO_URI` with your own Atlas connection string. Never commit your actual connection string or database password.

**Frontend — `frontend/.env`**

```env
VITE_API_URL=http://localhost:5000/api
```

If Vite starts on a different port, such as `5174`, update `CLIENT_URL` in `backend/.env` to match the frontend's actual origin, then restart the backend.

### 4. Configure MongoDB

You can use either a local MongoDB instance or MongoDB Atlas.

**MongoDB Atlas setup:**

1. Create a cluster in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a database user.
3. Configure Network Access for your development environment.
4. Copy the connection string.
5. Add the connection string to `MONGO_URI` in `backend/.env`.

Keep all credentials private.

### 5. Run the Application

Open two terminal windows from the project root.

**Terminal 1 — Backend**

```bash
cd backend
npm run dev
```

The backend is configured to use port `5000`.

**Terminal 2 — Frontend**

```bash
cd frontend
npm run dev
```

Open the local URL printed by Vite in your terminal.

## API Endpoints

The following endpoints are documented by the project.

### Authentication — `/api/auth`

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Authenticate a user |
| GET | `/api/auth/me` | Retrieve the authenticated user's profile |
| PUT | `/api/auth/profile` | Update profile information |

### Expenses — `/api/expenses`

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/expenses` | Retrieve expenses |
| GET | `/api/expenses/stats` | Retrieve spending statistics |
| GET | `/api/expenses/:id` | Retrieve an expense |
| POST | `/api/expenses` | Create an expense |
| PUT | `/api/expenses/:id` | Update an expense |
| DELETE | `/api/expenses/:id` | Delete an expense |

Protected endpoints require valid authentication. Confirm endpoint behavior and request formats in the backend routes before integrating with other clients.

## Demo Data

The project includes an optional seed script for inserting sample users and expenses.

**Warning:** The seed script may delete existing records in the `users` and `expenses` collections before inserting demo data. Do not run it against a database containing data you want to keep.

Run it only against a disposable development database after inspecting `backend/data/seedData.js`:

```bash
npm run seed
```

Demo credentials, if enabled in the current version, should be documented only when the corresponding demo account exists. Never publish personal account credentials.

## Security Notes

- Keep `.env` files out of Git.
- Use a strong, unique JWT secret.
- Never expose MongoDB credentials in frontend code.
- Validate and authorize requests on the backend.
- Use a restricted database account for application access.
- Do not commit real user or financial data.

## Future Improvements

Potential enhancements include:

- Expense budgets and spending limits
- Recurring expense management
- Monthly budget alerts
- Downloadable financial reports
- Deployment with a public demo
- Automated testing for authentication and expense APIs

These are potential improvements, not claims that the features are already implemented.

## What I Learned

This project provides practical experience with:

- Building a full-stack application using the MERN stack
- Designing and integrating REST APIs
- Managing MongoDB data with Mongoose
- Implementing JWT-based authentication
- Performing create, read, update, and delete operations
- Connecting a React frontend to a Node.js backend
- Managing environment variables and application configuration
- Using Git and GitHub for version control

## License

This repository references the MIT License. See the [`LICENSE`](LICENSE) file for the applicable terms.

## Author

**Shambhavi Bhargava**

GitHub: [@Shambhavi05-java](https://github.com/Shambhavi05-java)

Project: [Smart Expense Tracker](https://github.com/Shambhavi05-java/smart-expense-tracker)
