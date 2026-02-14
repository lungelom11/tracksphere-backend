import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// Import Routes
import adminRoutes from './routes/admin.route';

// Middleware
app.use(express.json());

// Routes
app.use('/api', adminRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 