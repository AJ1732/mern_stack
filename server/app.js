const express = require('express');
const mongoose = require('mongoose');
const { port, dbURI } = require('./utils/config');
const workoutRoutes = require('./routes/workoutRoutes');

// EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.json());

// CONNECT TO DATABASE
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(dbURI, clientOptions)
      .then((result) => app.listen(port, () => console.log(`Listening on ${port}`)))
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(e) {
    console.error(e)
  } finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
    // ? Why does this error occur when / is being requested: MongoNotConnectedError: Client must be connected before running operations
  }
}
run().catch(console.dir);

// ROUTES
app.use('/api/workouts', workoutRoutes);

// LISTENING FOR REQUESTS
// app.listen(port, () => console.log(`Listening on ${port}`))