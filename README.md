# 🖥️ System Info API (Node.js + Express)

A lightweight API built with Node.js and Express to fetch real-time system and hardware information from your PC using Node's native `os` module.

> Great for debugging, monitoring, dashboards, or when you just wanna flex your PC stats to the browser.

---

## 🚀 Features

- System architecture & platform
- CPU details
- Free, used, and total memory (in GB)
- Hostname, OS type, and release
- System uptime
- Network interfaces
- Load averages
- Current user info

---

## 📦 Tech Stack

- Node.js
- Express.js
- Built-in `os` module
- CORS enabled (for frontend access)

---

## 📂 Endpoints

### `GET /`

Simple health check.

**Response:**
```json
{ "message": "System OS API is live" }
GET /system
Fetch full system statistics.

Response Sample:

json
Copy
Edit
{
  "status": "success",
  "data": {
    "arch": "x64",
    "cpus": [...],
    "freemem": "3.5GB",
    "totalmem": "8.0GB",
    "usedmem": "4.5GB",
    "hostname": "your-pc",
    "platform": "linux",
    "release": "5.15.0-100",
    "type": "Linux",
    "uptime": "5h 32m",
    "networkInterfaces": {...},
    "loadavg": ["0.25", "0.35", "0.40"],
    "userInfo": {...},
    "homedir": "/home/you",
    "tmpdir": "/tmp",
    "endianness": "LE",
    "machine": "x86_64"
  }
}
🛠️ Installation
bash
Copy
Edit
git clone https://github.com/your-username/system-info-api.git
cd system-info-api
npm install
node index.js
Server will run on: http://localhost:3001

🌍 CORS
This API uses open CORS for testing. You can restrict it as needed:

js
Copy
Edit
app.use(cors({
  origin: ['http://localhost:8000'],
  methods: ['GET']
}));
