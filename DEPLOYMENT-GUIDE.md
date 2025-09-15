# 🌐 DEPLOYMENT URL CONFIGURATION GUIDE

## URLs You Need to Change When Deploying:

### 🔧 **Backend Environment Variables (.env.production):**

```bash
# Replace these with your actual deployment URLs:
APP_URL=https://your-backend-domain.com/           # Your deployed backend URL
JWT_SECRET=your-super-secure-jwt-secret-key-here   # Generate a secure random string
# Note: No FRONTEND_URL needed - CORS allows any HTTPS origin in production
```

### 🔧 **Frontend Environment Variables (.env.production):**

```bash
# Replace with your deployed URLs:
VITE_API_BASE_URL=https://your-backend-domain.com   # Your deployed backend URL (no trailing slash)
VITE_FRONTEND_URL=https://your-frontend-domain.com  # Your deployed frontend URL (no trailing slash)
```

---

## 📋 **Deployment Platform Examples:**

### **Option 1: Vercel**
```bash
# Backend (.env.production):
APP_URL=https://your-backend.vercel.app/

# Frontend (.env.production):
VITE_API_BASE_URL=https://your-backend.vercel.app
```

### **Option 2: Netlify + Railway**
```bash
# Backend on Railway (.env.production):
APP_URL=https://your-backend.up.railway.app/

# Frontend on Netlify (.env.production):
VITE_API_BASE_URL=https://your-backend.up.railway.app
```

### **Option 3: Custom Domain**
```bash
# Backend (.env.production):
APP_URL=https://api.yourdomain.com/

# Frontend (.env.production):
VITE_API_BASE_URL=https://api.yourdomain.com
```

---

## ⚡ **Quick Deployment Checklist:**

1. ✅ **Set Backend Environment Variables:**
   - `APP_URL` → Your deployed backend URL  
   - `JWT_SECRET` → Generate a secure random string
   - `MONGO_URI` → Your MongoDB connection string
   - `NODE_ENV=production`

2. ✅ **Set Frontend Environment Variables:**
   - `VITE_API_BASE_URL` → Your deployed backend URL

3. ✅ **CORS Configuration:**
   - Automatically allows any HTTPS origin in production
   - No frontend domain configuration needed in backend

4. ✅ **Test Deployment:**
   - User registration/login
   - URL shortening  
   - URL redirection
   - Click tracking

---

## 🔒 **Security Notes:**

- Never commit `.env*` files to Git (already protected by .gitignore)
- Use environment variable management in your deployment platform
- Generate a strong JWT_SECRET (minimum 32 characters)
- Ensure HTTPS is enabled in production

---

## 🛠 **Current Configuration:**

**Local Development (Already Working):**
- Backend: http://localhost:3000
- Frontend: http://localhost:5173
- CORS: Automatically configured

**Production (Update These):**
- Backend: https://your-backend-domain.com
- Frontend: https://your-frontend-domain.com
- CORS: Automatically allows any HTTPS origin
