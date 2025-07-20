const express = require('express');
const os = require('os');
const cors = require('cors');

const app = express();
const port = 3001;

// Enable CORS for local testing

// app.use(cors({
//   origin: ['http://localhost:8000', 'http://0.0.0.0:8000'], // Allow both origins
//   methods: ['GET'],
// }));


app.use(cors({ origin: '*', methods: ['GET'] }));

// Endpoint to get all os module data
app.get('/system', (req, res) => {
  try {
    const systemData = {
      arch: os.arch(),
      cpus: os.cpus(),
      freemem: (os.freemem() / (1024 * 1024 * 1024)).toFixed(1) + 'GB',
      totalmem: (os.totalmem() / (1024 * 1024 * 1024)).toFixed(1) + 'GB',
      usedmem: ((os.totalmem() - os.freemem()) / (1024 * 1024 * 1024)).toFixed(1) + 'GB',
      hostname: os.hostname(),
      platform: os.platform(),
      release: os.release(),
      type: os.type(),
      uptime: Math.floor(os.uptime() / 3600) + 'h ' + Math.floor((os.uptime() % 3600) / 60) + 'm',
      networkInterfaces: os.networkInterfaces(),
      loadavg: os.loadavg().map(avg => avg.toFixed(2)),
      userInfo: os.userInfo(),
      homedir: os.homedir(),
      tmpdir: os.tmpdir(),
      endianness: os.endianness(),
      machine: os.machine(),
    };

    res.json({ status: 'success', data: systemData });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch system details',
      error: error.message,
    });
  }
});

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'System OS API is live' });
});


//Health check for the API whether live or dead!
// app.get('/health', (req, res) =>{
//   res.json({message: 'System API Health check running live and is healthy'});
// });


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});