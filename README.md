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
```

**GET** /system
Fetch full system statistics.

Response Sample:

```
System Details (Tej's PC)
{
  "arch": "x64",
  "cpus": [
    {
      "model": "Intel(R) Core(TM) i3-4005U CPU @ 1.70GHz",
      "speed": 1496,
      "times": {
        "user": 1776950,
        "nice": 18890,
        "sys": 525230,
        "idle": 16167660,
        "irq": 0
      }
    },
    {
      "model": "Intel(R) Core(TM) i3-4005U CPU @ 1.70GHz",
      "speed": 1576,
      "times": {
        "user": 1751970,
        "nice": 17480,
        "sys": 540580,
        "idle": 16188980,
        "irq": 0
      }
    },
    {
      "model": "Intel(R) Core(TM) i3-4005U CPU @ 1.70GHz",
      "speed": 1581,
      "times": {
        "user": 1817330,
        "nice": 18490,
        "sys": 522150,
        "idle": 16151560,
        "irq": 0
      }
    },
    {
      "model": "Intel(R) Core(TM) i3-4005U CPU @ 1.70GHz",
      "speed": 1589,
      "times": {
        "user": 1794940,
        "nice": 21060,
        "sys": 542300,
        "idle": 16213720,
        "irq": 0
      }
    }
  ],
  "freemem": "3.9GB",
  "totalmem": "11.6GB",
  "usedmem": "7.7GB",
  "hostname": "tejthedev",
  "platform": "linux",
  "release": "6.8.0-52-generic",
  "type": "Linux",
  "uptime": "10h 6m",
  "networkInterfaces": {
    "lo": [
      {
        "address": "127.0.0.1",
        "netmask": "255.0.0.0",
        "family": "IPv4",
        "mac": "00:00:00:00:00:00",
        "internal": true,
        "cidr": "127.0.0.1/8"
      },
      {
        "address": "::1",
        "netmask": "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
        "family": "IPv6",
        "mac": "00:00:00:00:00:00",
        "internal": true,
        "cidr": "::1/128",
        "scopeid": 0
      }
    ],
    "wlp9s0f0": [
      {
        "address": "192.168.43.14",
        "netmask": "255.255.255.0",
        "family": "IPv4",
        "mac": "b0:10:41:85:c2:89",
        "internal": false,
        "cidr": "192.168.43.14/24"
      },
      {
        "address": "fe80::dd4c:7177:6151:44bf",
        "netmask": "ffff:ffff:ffff:ffff::",
        "family": "IPv6",
        "mac": "b0:10:41:85:c2:89",
        "internal": false,
        "cidr": "fe80::dd4c:7177:6151:44bf/64",
        "scopeid": 3
      }
    ]
  },
  "loadavg": [
    "3.06",
    "2.75",
    "2.21"
  ],
  "userInfo": {
    "uid": 1000,
    "gid": 1000,
    "username": "olateju",
    "homedir": "/home/olateju",
    "shell": "/usr/bin/bash"
  },
  "homedir": "/home/olateju",
  "tmpdir": "/tmp",
  "endianness": "LE",
  "machine": "x86_64"
}
```

### 🛠️ Installation


```git clone <https://github.com/your-username/system-info-api.git>
cd system-info-api
npm install
node index.js
```

Server will run on: <http://localhost:3001>

🌍 CORS
This API uses open CORS for testing. You can restrict it as needed:


```app.use(cors({
  origin: ['http://localhost:8000'],
  methods: ['GET']
}));
```