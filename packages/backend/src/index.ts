import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import usersRouter from './api/users';
import skillsRouter from './api/skills';
import projectsRouter from './api/projects';
import suggestionsRouter from './api/suggestions';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', usersRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/suggestions', suggestionsRouter);

// Basic health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 