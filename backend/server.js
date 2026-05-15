import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import passport from './passport.js';
import cors from 'cors';
import session from 'express-session';
import authRoute from './routes/auth.js';
import taskRoutes from './routes/Task.routes.js';
import { ConnectDB } from './config/db.config.js';

const app = express();
const port = process.env.PORT || 5000;

// DB
ConnectDB();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

app.use(
  session({
    secret: 'cyberwolve',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);

// Routes
app.use('/auth', authRoute);
app.use('/api/v1/task', taskRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});