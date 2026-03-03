
# Mitahara React E-Commerce App

Mitahara is a modern, responsive e-commerce web application built with React and Vite. It features user authentication, product browsing, cart management, and admin product controls.

## Features

- User registration and login (JWT authentication)
- Add products to cart, update quantity, and remove items
- View cart with product images, names, prices, and total billing
- Responsive design for all devices
- Admin panel for adding/editing products
- Modern UI with styled navbar and interactive icons

## Technologies Used

- React
- Vite
- Axios
- Express (backend, not included here)
- MongoDB (backend, not included here)
- Mongoose (backend, not included here)

## Getting Started

### Prerequisites

- Node.js and npm
- Backend API running (see below)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Mitahara_react/mitahara
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Backend API

- The frontend expects a backend running at `http://localhost:4300` with endpoints for user authentication and cart management.
- Example endpoints:
  - `POST /users/register` — Register new user
  - `POST /users/login` — Login user
  - `GET /users/cart` — Get cart items
  - `POST /users/cart` — Add item to cart
  - `DELETE /users/cart/:id` — Remove item from cart

## Project Structure

```
mitahara/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── AddProduct.jsx
│   │   ├── Admin.jsx
│   │   ├── Cart.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── ...
│   ├── services/
│   │   ├── cartService.js
│   │   └── ...
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Customization

- Update logo and branding in `src/assets/` and `Navbar.jsx`
- Modify color scheme in `Navbar.css` and `App.css`
- Extend product and cart features as needed

## License

This project is for educational/demo purposes. Please add your own license if deploying commercially.

---

Feel free to reach out for improvements or questions!
