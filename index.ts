import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './routers/users';
import { addUser, getAllusers } from './controller/users';
const app = express();

// allow access req.body
app.use(express.urlencoded({ extended: true }));
// allow body json url name=dsadas https://expressjs.com/en/api.html#express.json
app.use(express.json());

app.get('/', (req, res) => {
  console.log('home');
  res.send('/home');
});

app.use('/users', userRouter);

mongoose
  .connect(
    'mongodb+srv://admin:BtfuJwEKUBxDc3Wv@cluster0.08kjyko.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() =>
    app.listen(5000, () => console.log('Connected and Running on port 5000'))
  )
  .catch((err) => console.log('Error connecting to Mongo', err));
