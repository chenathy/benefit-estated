
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
import 'isomorphic-fetch';
import submitRoutes from './submit.js';


const APP = express();
const PORT = process.env.REACT_APP_BACKEND_PORT || 3001;

// SSL/TLS certificates
const credentials = { 
    key: fs.readFileSync('cert/server.key', 'utf8'), 
    cert: fs.readFileSync('cert/server.cert', 'utf8') 
};

APP.use(session({
    secret: 'my_secret',
    resave: false,
    saveUninitialized: true,
}));

APP.use(cors());
APP.use(bodyParser.json());
APP.get('/', (req, res) => res.json(`My API running at port ${PORT}...`));
APP.use('/', submitRoutes);

const httpsServer = https.createServer(credentials, APP);

httpsServer.listen(PORT, () => {
    console.log(`Server running at https://0.0.0.0:${PORT}`);
});
