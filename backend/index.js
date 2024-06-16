
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'isomorphic-fetch';
import submitRoutes from './submit.js';


const APP = express();
const PORT = process.env.REACT_APP_BACKEND_PORT || 3001;

APP.use(session({
    secret: 'my_secret',
    resave: false,
    saveUninitialized: true,
}));

APP.use(cors());
APP.use(bodyParser.json());
APP.use('/', submitRoutes);


APP.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
