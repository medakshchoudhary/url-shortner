# URL Shortener 🔗

A full-stack URL shortener application built with Node.js, Express, React, and MongoDB.

## Features ✨

- 🔗 Shorten long URLs
- 👤 User authentication (Register/Login)
- 📊 Click tracking and analytics
- 🎯 Custom short URL slugs (for authenticated users)
- 📱 Responsive design
- 🔒 Secure JWT authentication

## Tech Stack 🛠️

**Backend:**
- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- CORS enabled

**Frontend:**
- React 19
- Vite
- TailwindCSS
- Redux Toolkit
- Tanstack Router
- Axios

## Setup Instructions 🚀

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd URL_SHORTNER
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env.local` file in backend directory:
```bash
MONGO_URI=your_mongodb_connection_string
APP_URL=http://localhost:3000/
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
PORT=3000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create `.env.local` file in frontend directory:
```bash
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_NAME=URL Shortener
VITE_APP_VERSION=1.0.0
```

### 4. Start Development Servers

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## Deployment 🌐

### Environment Variables for Production

**Backend (.env.production):**
```bash
MONGO_URI=your_production_mongodb_uri
APP_URL=https://your-backend-domain.com/
JWT_SECRET=super_secure_jwt_secret
NODE_ENV=production
PORT=3000
```

**Frontend (.env.production):**
```bash
VITE_API_BASE_URL=https://your-backend-domain.com
VITE_APP_NAME=URL Shortener
VITE_APP_VERSION=1.0.0
```

### Deployment Platforms

#### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Connect Vercel to your repository
3. Deploy frontend and backend separately
4. Set environment variables in Vercel dashboard

#### Option 2: Railway
1. Connect Railway to your GitHub repo
2. Deploy both services
3. Configure environment variables

#### Option 3: Netlify + Render
- Frontend: Deploy to Netlify
- Backend: Deploy to Render

## API Endpoints 📡

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user  
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### URL Management
- `POST /api/create` - Create short URL
- `GET /:shortId` - Redirect to original URL
- `POST /api/user/urls` - Get user's URLs

## Project Structure 📁

```
URL_SHORTNER/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── dao/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routing/
│   │   ├── store/
│   │   └── utils/
│   ├── index.html
│   └── package.json
└── README.md
```

## Security Features 🔒

- Password hashing with bcryptjs
- JWT tokens with secure HTTP-only cookies
- CORS configuration
- Input validation
- Environment variable protection

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the ISC License.

## Support 💬

If you encounter any issues, please check:
1. All environment variables are set correctly
2. MongoDB connection is working
3. Both servers are running
4. CORS is properly configured

For additional help, please open an issue in the repository.
