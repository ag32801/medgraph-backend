# 🏥 MedGraph Medical Dashboard

A medical data analysis platform using graph databases to analyze relationships between symptoms, diseases, and geographical locations.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Java 21, Spring Boot, Spring Data Neo4j |
| Database | Neo4j AuraDB (Graph Database) |
| Frontend | React 18, Vite, Axios |
| Container | Docker, Docker Compose |
| CI/CD | GitHub Actions |

---

## 📋 Prerequisites

Make sure you have installed:
- **Java 21** → https://www.oracle.com/java/technologies/downloads/
- **Node.js v20+** → https://nodejs.org/
- **Git** → https://git-scm.com/

---

## 🚀 How to Run (Local Development)

### Step 1 — Clone the repository

git clone https://github.com/ag32801/medgraph-backend.git
cd medgraph-backend

### Step 2 — Start the Backend

Open a terminal and run:

cd backend
./gradlew bootRun

Wait until you see:
Started MedgraphBackendApplication in X seconds

Backend is running at: http://localhost:8080

### Step 3 — Start the Frontend

Open a new terminal and run:

cd frontend
npm install
npm run dev

Wait until you see:
VITE ready on http://localhost:5173

Frontend is running at: http://localhost:5173

### Step 4 — Open the app

Go to your browser and open:
http://localhost:5173

---

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/symptoms | GET | Get all symptoms |
| /api/check-symptoms | POST | Check symptoms (body: array of symptom names) |
| /api/cities | GET | Get all cities |
| /api/postalcodes | GET | Get postal codes |

---

## ⚠️ Troubleshooting

**Port 8080 already in use:**

netstat -ano | findstr :8080
taskkill /PID <PID_NUMBER> /F

Then run ./gradlew bootRun again.

**Symptoms dropdown is empty:**
- Make sure backend is running on port 8080
- Check frontend/.env.development contains:
  VITE_API_URL=http://localhost:8080
- Always restart frontend after changing .env files

**Frontend can't connect to backend:**
- Confirm backend started successfully
- Check there are no CORS errors in browser DevTools (F12 → Console)

---

## 🐳 Run with Docker (Optional)

docker-compose up --build

- Backend: http://localhost:8081
- Frontend: http://localhost:5173

---

## 📁 Project Structure

medgraph-backend/
├── backend/                  # Spring Boot application
│   ├── src/main/java/        # Java source code
│   └── src/main/resources/   # application.properties
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── services/         # API calls (api.js)
│   └── .env.development      # Local environment variables
├── docker-compose.yml        # Docker setup
└── README.md

---

## 👥 Contributors

- Agasto Kuriyath Augustine — Backend (Spring Boot, Neo4j, Docker)
- Ananthu — Frontend (CI/CD Pipeline)
