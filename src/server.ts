import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// Import Routes
// import adminRoutes from './routes/admin.route';
import authRoutes from './routes/auth.routes.js';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use('/api', adminRoutes);
app.use ('/api', authRoutes);


//defaul endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Tracksphere API');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 