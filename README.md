# 🚪 API Gateway - Airline Management System

The **API Gateway** acts as a central entry point for routing requests to various backend services (Booking Service, etc.). It handles authentication checks, request forwarding, and basic rate-limiting.

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js** for routing
- **http-proxy-middleware** for service routing
- **Axios** for authentication verification
- **express-rate-limit** for rate limiting
- **Morgan** for logging HTTP requests

---

## 🚀 Setup

### 1. Clone the Repo

```bash
git clone https://github.com/KrrishKumar125/API_GATEWAY.git
cd API_GATEWAY
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the API Gateway

```bash
npm start
```

The API Gateway will run on `http://localhost:3005`.

---

## 🧪 How it Works

- The gateway authenticates requests before forwarding them to backend services.
- Routes like `/bookingservice` are forwarded to the Booking Service after verifying the JWT token.
- The `/home` route returns a simple response to verify that the gateway is up.

---

## 📊 Folder Structure

```md
API_GATEWAY/
├── index.js                # Main entry point
├── package.json            # Dependencies
└── README.md               # This file
```

---

## 🔮 Future Improvements

- Integrate Swagger for API docs
- Add caching (e.g., Redis)
- Implement load balancing

---

## 🙋‍♂️ Author

**Krrish Kumar**  
[LinkedIn Profile](https://www.linkedin.com/in/krrishkumar125/)

---
