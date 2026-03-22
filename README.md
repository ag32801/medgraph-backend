markdown
# 🏥 MedGraph Medical Dashboard

## Overview

MedGraph is a medical data analysis platform that uses graph databases to analyze relationships between symptoms, diseases, and geographical locations. The application allows users to select symptoms and get AI-powered disease predictions based on medical data.

### ✨ Features
- **Symptom Checker** - Select multiple symptoms and get possible disease matches
- **Neo4j Graph Database** - Complex medical relationship analysis
- **Modern UI** - Clean, responsive interface with medical theme
- **REST API** - Backend endpoints for medical data queries
- **Docker Support** - Containerized for easy deployment

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Java 21, Spring Boot, Spring Data Neo4j |
| Database | Neo4j AuraDB (Graph Database) |
| Frontend | React 18, Vite, Axios |
| Styling | Custom CSS with medical background |
| Container | Docker, Docker Compose |
| CI/CD | GitHub Actions |

## 📋 Prerequisites

Before running the project, ensure you have:

- **Docker Desktop** - for running the backend
- **Node.js** (v20.19+ or v22.12+) - for frontend development
- **npm** - comes with Node.js
- **Git** - for cloning the repository

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/ag32801/medgraph-backend.git
cd medgraph-backend
2. Start the Backend (Docker)
bash
docker-compose up --build
Wait until you see: Started MedgraphBackendApplication

The backend will be available at: http://localhost:8081

3. Start the Frontend (in a new terminal)
bash
cd frontend
npm install
npm run dev
The frontend will be available at: http://localhost:5173

4. Open your browser
Go to: http://localhost:5173

🎯 How to Use
Select symptoms from the dropdown (you can select multiple)

Click "Check Symptoms"

View the top 3 possible diseases with:

Disease name

Matched symptoms

Match count

Match percentage

🔌 API Endpoints
Endpoint	Method	Description
/api/symptoms	GET	Get all symptoms
/api/check-symptoms	POST	Check symptoms (body: array of symptom names)
/api/cities	GET	Get all cities
/api/postalcodes	GET	Get postal codes (optional ?city=name)
🗄️ Neo4j Database Setup
The application connects to a Neo4j AuraDB instance. For security reasons, credentials are not included in the repository.

To run the project:

Create a free Neo4j AuraDB instance at console.neo4j.io

Get your connection URI, username, and password

Update the docker-compose.yml with your credentials:

yaml
environment:
  - NEO4J_URI=neo4j+s://your-instance.databases.neo4j.io
  - NEO4J_USERNAME=neo4j
  - NEO4J_PASSWORD=your-password
Add your IP to the Neo4j allowlist

📁 Project Structure
text
medgraph-backend/
├── backend/                 # Spring Boot application
│   ├── src/main/java/       # Java source code
│   │   └── org/example/medgraphbackend/
│   │       ├── config/      # CORS configuration
│   │       ├── controller/  # REST endpoints
│   │       ├── model/       # Neo4j entities
│   │       └── repository/  # Data access layer
│   └── src/main/resources/  # Application properties
├── frontend/                # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── services/        # API calls
│   │   ├── assets/          # Images and backgrounds
│   │   ├── App.css          # Main styling
│   │   └── App.jsx          # Main component
│   ├── package.json         # Dependencies
│   └── .env.development     # Environment variables
├── .github/workflows/       # CI/CD pipelines
├── Dockerfile               # Backend Docker configuration
├── docker-compose.yml       # Docker services (development)
├── docker-compose.prod.yml  # Docker services (production)
└── README.md                # This file
🐛 Troubleshooting
Backend won't start
Check if Docker Desktop is running

Run docker-compose down then docker-compose up --build

Verify Neo4j credentials in docker-compose.yml

Frontend can't connect to backend
Ensure backend is running on port 8081

Check that frontend/.env.development has VITE_API_URL=http://localhost:8081

Restart frontend after changes: npm run dev

Symptoms not loading in dropdown
Verify Neo4j instance is running (check Neo4j Aura console)

Check your IP is whitelisted in Neo4j Aura

Test API directly: http://localhost:8081/api/symptoms

🚢 Deployment
Backend
The backend is containerized with Docker and can be deployed to AWS (ECS/Elastic Beanstalk) or any container platform.

Frontend
The frontend can be built for production:

bash
cd frontend
npm run build
The static files will be in frontend/dist/ ready for deployment.

👥 Contributors
Agasto Kuriyath Augustine - Backend Developer (Spring Boot, Neo4j, Docker, Cloud)

Ananthu - Frontend Developer (React, UI/UX, Security)

📄 License
This project is for educational and portfolio purposes.

