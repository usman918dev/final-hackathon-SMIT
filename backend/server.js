require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');

const userRoute = require('./routes/userRoute');

const app = express();

connectDB();
console.log("db connected");

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
// console.log(' i am also working greqt here');

app.use('/api/events', eventRoutes);
// console.log(' i also ');
app.use('/api/user', userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
